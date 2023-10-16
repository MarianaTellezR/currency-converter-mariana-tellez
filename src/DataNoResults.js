import React from "react";
import "./DataNoResults.css";
import coins from "./img/coins.png";

export default function DataNoResults() {
  return (
    <div className="DataNoResults">
      <img src={coins} alt="Currency" />
      <h2>📈 Real-Time Exchange Rates 📉 </h2>
      <p>
        Stay updated with the latest currency exchange rates from around the
        globe. Our app provides real-time, accurate, and up-to-date data,
        ensuring you get the best value for your money.
      </p>
      <h2>🌍 Multiple Currencies</h2>
      <p>
        Support to a wide range of currencies, often including major and minor
        ones. This versatility is helpful for international travelers or anyone
        dealing with foreign currencies.
      </p>
    </div>
  );
}
