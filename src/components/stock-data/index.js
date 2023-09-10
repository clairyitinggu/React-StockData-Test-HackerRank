import React,{useState} from "react";


import "./index.css";

export default function StockData() {
  const [date, setDate] = useState("5-January-2000");
  const [price,setPrice] = useState(null);
  const [noResult, setNoResult] = useState(true);


  const fetchAPI = async()=>{
    try{
      let response = await fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${date}`);
      let data = await response.json();
      setPrice(data.data[0]);
      setNoResult(false);
    }catch(error){
      throw error;
    }
  }


  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" placeholder={date} id="app-input" data-testid="app-input" onChange={(e)=>setDate(e.target.value)}/>
        {/* {date} */}
        <button className="" id="submit-button" data-testid="submit-button" onClick={fetchAPI} >Search</button>
      </section>
      
        {price && 
        <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">
        <li className="py-10">Open:{price.open}</li>
        <li className="py-10">High:{price.high}</li>
        <li className="py-10">Low:{price.low}</li>
        <li className="py-10">Close:{price.close}</li>
        </ul>
        }
      {noResult && <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result">No Result Found</div>}
      
    </div>
  );
}