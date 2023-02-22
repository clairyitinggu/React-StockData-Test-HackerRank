import React from "react";
import "./App.css";
import "h8k-components";
import StockData from "./components/stock-data/index.js";
import { useState } from "react";

function App() {
  return (
    <div>
      <h8k-navbar />
      <StockData />
    </div>
  );
}

export default App;
