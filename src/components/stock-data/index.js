import React from "react";
import "./index.css";
import { useState } from "react";

export default function StockData() {
  const [date, setDate] = useState("");
  const url = "https://jsonmock.hackerrank.com/api/stocks?date=";
  const [data, setData] = useState(null);

  async function handleClick(e) {
    await fetch(url + date)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        console.log(data);
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
      {data && data.length !== 0 && (
        <ul
          className="mt-50 slide-up-fade-in styled"
          id="stockData"
          data-testid="stock-data"
        >
          <li>Open: {data[0].open}</li>
          <li>Close: {data[0].close}</li>
          <li>High: {data[0].high}</li>
          <li>Low: {data[0].low}</li>
        </ul>
      )}
      {data && data.length === 0 && (
        <div
          className="mt-50 slide-up-fade-in"
          id="no-result"
          data-testid="no-result"
        >
          No Results Found
        </div>
      )}
    </div>
  );
}
