import React from "react";
import "./DataResults.css";
import axios from "axios";

export default function DataResults({ data }) {
  function displayCurrencyData(response) {
    console.log(response);
  }

  function getApiInfo() {
    let base = "MXN";
    let apiKey = "fca_live_i6RaT2DvGKzu5u40FhbLUdnt46MqeADYktO9ONtq";
    let apiUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=${base}`;
    axios.get(apiUrl).then(displayCurrencyData);
  }

  getApiInfo();

  return (
    <div>
      <h2>Your exchange rate:</h2>
      <ul>
        <li>Data from Parent Component: {data.amount}</li>
        <li>Data from Parent Component: {data.from}</li>
        <li>Data from Parent Component: {data.to}</li>
      </ul>
    </div>
  );
}
