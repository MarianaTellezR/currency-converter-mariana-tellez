import React, { useState, useEffect } from "react";
import "./DataResults.css";
import axios from "axios";

export default function DataResults({ data }) {
  let amount = data.amount;
  let base = data.from;
  let objective = data.to;

  const [result, setResult] = useState(null);

  useEffect(() => {
    function displayCurrencyData(response) {
      console.log(response);
      setResult(amount * response.data.data[objective]);
    }

    function getApiInfo() {
      let apiKey = "fca_live_i6RaT2DvGKzu5u40FhbLUdnt46MqeADYktO9ONtq";
      let apiUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=${base}&currencies=${base},${objective}`;
      axios.get(apiUrl).then(displayCurrencyData);
    }

    getApiInfo();
  }, [amount, base, objective]);

  return (
    <div>
      <h2>Your exchange rate:</h2>
      <ul>
        <li>Data from Parent Component: {amount}</li>
        <li>Data from Parent Component: {base}</li>
        <li>Data from Parent Component: {objective}</li>
        {result && <li>Result: {result}</li>}
      </ul>
    </div>
  );
}
