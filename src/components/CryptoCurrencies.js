import React from "react";
import CryptoCurrency from "./CryptoCurrency";
import css from "./CryptoCurrencies.css";

const CryptoCurrencies = ({ allCryptoCurrencies }) => {
  const MAX_CRYPTOS_ON_PAGE = 10;

  const showCryptosOnPage = function (crypto) {
    let count = 1;

    count++;
  };

  return (
    <div id="crypto-currency-block">
      {allCryptoCurrencies.map((crypto) => (
        <div className="crypto-currency-item">
          <CryptoCurrency key={crypto.id} crypto={crypto} />
        </div>
      ))}
    </div>
  );
};

export default CryptoCurrencies;
