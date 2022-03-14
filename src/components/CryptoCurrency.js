import React from "react";
import css from "./CryptoCurrency.css";

const CryptoCurrency = ({ id, crypto }) => {
  const setRateOfChangeColor = (rateOfChange) => {
    let value = rateOfChange > 0 ? "green" : "red";
    if (value === 0) return "blue";
    return value;
  };

  return (
    <div className="crypto-currency" key={id}>
      <div>Name: {crypto.name}</div>
      <div>Rank: {crypto.rank}</div>
      <div>Symbol: {crypto.symbol}</div>
      <div>Price: {crypto.priceUsd}</div>
      <div style={{ color: setRateOfChangeColor(crypto.rateOfChange) }}>
        Change: <span className="rate-of-change">{crypto.rateOfChange}%</span>
      </div>
    </div>
  );
};

export default CryptoCurrency;
