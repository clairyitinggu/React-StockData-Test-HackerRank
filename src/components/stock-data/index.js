import React from "react";
import "./index.css";
import { useState } from "react";
import axios from "axios";

export default function StockData() {
  const [date, setDate] = useState("");
  const url = "https://jsonmock.hackerrank.com/api/stocks?date=";
  const [data, setData] = useState([]);

  async function handleClick(e) {
    e.preventDefault();

    await axios.get(url + date).then((response) => {
      console.log(response.data.data[0]);
      setData(response.data.data[0]);
    });
  }

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input
          type="text"
          className="large"
          placeholder="5-January-2000"
          id="app-input"
          data-testid="app-input"
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          className=""
          id="submit-button"
          data-testid="submit-button"
          onClick={handleClick}
        >
          Search
        </button>
      </section>
      <ul
        className="mt-50 slide-up-fade-in styled"
        id="stockData"
        data-testid="stock-data"
      ></ul>
      <div
        className="mt-50 slide-up-fade-in"
        id="no-result"
        data-testid="no-result"
      ></div>
    </div>
  );
}
