import React from "react";
import css from "./MainPage.css";
import { useState, useEffect } from "react";
import CryptoCurrencies from "./CryptoCurrencies";

const MainPage = () => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);

  const url = "https://vast-brushlands-93774.herokuapp.com/api";

  useEffect(() => {
    getCryptoCurrencies();
  }, []);

  const getCryptoCurrencies = async () => {
    const cryptos = await fetchCryptoCurrencies();
    setCryptoCurrencies(cryptos);
  };

  const fetchCryptoCurrencies = async () => {
    const cryptoFromDatabaseInJson = await (
      await fetch(`${url}/v2/all`) 
      ).json();
    await JSON.parse(JSON.stringify(cryptoFromDatabaseInJson));
    return cryptoFromDatabaseInJson;
  };
  return (
    <div className="crypto-currency-block-wrapper">
      {cryptoCurrencies.length > 0 ? (
        <CryptoCurrencies allCryptoCurrencies={cryptoCurrencies} />
      ) : (
        <span id="empty-crypto-currencies">No cryptocurrencies in DB yet</span>
      )}
    </div>
  );
};

export default MainPage;
