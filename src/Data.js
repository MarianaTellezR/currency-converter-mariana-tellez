import React, { useState } from "react";
import "./Data.css";

export default function Data({ sendData }) {
  const [inputs, setInputs] = useState({
    amount: "",
    from: "",
    to: "",
  });

  const [formError, setFormError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputs.amount && inputs.from && inputs.to) {
      setFormError(false);
      sendData(inputs);
    } else {
      setFormError(true);
    }
  };

  const handleInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  let form = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="amount">Enter the amount:</label>
      <input
        type="text"
        placeholder="Amount"
        onChange={handleInputChange}
        name="amount"
        id="amount"
        required
      />

      <label htmlFor="from">From:</label>
      <select
        value={inputs.from}
        name="from"
        id="from"
        onChange={handleInputChange}
        required
      >
        <option value="">Select</option>
        <option value="EUR">EUR Euro</option>
        <option value="USD">USD US Dollar</option>
        <option value="JPY">JPY Japanese yen</option>
        <option value="BGN">BGN Bulgarian Lev</option>
        <option value="CZK">CZK Czech Republic Koruna</option>
        <option value="DKK">DKK Danish Krone</option>
        <option value="GBP">GBP British Pound Sterling</option>
        <option value="HUF">HUF Hungarian Forint</option>
        <option value="PLN">PLN Polish Zloty</option>
        <option value="RON">RON Romanian Leu</option>
        <option value="SEK">SEK Swedish Krona</option>
        <option value="CHF">CHF Swiss Franc</option>
        <option value="ISK">ISK Icelandic Króna</option>
        <option value="NOK">NOK Norwegian Krone</option>
        <option value="HRK">HRK Croatian Kuna</option>
        <option value="RUB">RUB Russian Ruble</option>
        <option value="TRY">TRY Turkish Lira</option>
        <option value="AUD">AUD Australian Dollar</option>
        <option value="BRL">BRL Brazilian Real</option>
        <option value="CAD">CAD Canadian Dollar</option>
        <option value="CNY">CNY Chinese Yuan</option>
        <option value="HKD">HKD Hong Kong Dollar</option>
        <option value="IDR">IDR Indonesian Rupiah</option>
        <option value="ILS">ILS Israeli New Sheqel</option>
        <option value="INR">INR Indian Rupee</option>
        <option value="KRW">KRW South Korean Won</option>
        <option value="MXN">MXN Mexican Peso</option>
        <option value="MYR">MYR Malaysian Ringgit</option>
        <option value="NZD">NZD New Zealand Dollar</option>
        <option value="PHP">PHP Philippine Peso</option>
        <option value="SGD">SGD Singapore Dollar</option>
        <option value="THB">THB Thai Baht</option>
        <option value="ZAR">ZAR South African Rand</option>
      </select>

      <label htmlFor="to">To:</label>
      <select
        value={inputs.to}
        name="to"
        id="to"
        onChange={handleInputChange}
        required
      >
        <option value="">Select</option>
        <option value="EUR">EUR Euro</option>
        <option value="USD">USD US Dollar</option>
        <option value="JPY">JPY Japanese yen</option>
        <option value="BGN">BGN Bulgarian Lev</option>
        <option value="CZK">CZK Czech Republic Koruna</option>
        <option value="DKK">DKK Danish Krone</option>
        <option value="GBP">GBP British Pound Sterling</option>
        <option value="HUF">HUF Hungarian Forint</option>
        <option value="PLN">PLN Polish Zloty</option>
        <option value="RON">RON Romanian Leu</option>
        <option value="SEK">SEK Swedish Krona</option>
        <option value="CHF">CHF Swiss Franc</option>
        <option value="ISK">ISK Icelandic Króna</option>
        <option value="NOK">NOK Norwegian Krone</option>
        <option value="HRK">HRK Croatian Kuna</option>
        <option value="RUB">RUB Russian Ruble</option>
        <option value="TRY">TRY Turkish Lira</option>
        <option value="AUD">AUD Australian Dollar</option>
        <option value="BRL">BRL Brazilian Real</option>
        <option value="CAD">CAD Canadian Dollar</option>
        <option value="CNY">CNY Chinese Yuan</option>
        <option value="HKD">HKD Hong Kong Dollar</option>
        <option value="IDR">IDR Indonesian Rupiah</option>
        <option value="ILS">ILS Israeli New Sheqel</option>
        <option value="INR">INR Indian Rupee</option>
        <option value="KRW">KRW South Korean Won</option>
        <option value="MXN">MXN Mexican Peso</option>
        <option value="MYR">MYR Malaysian Ringgit</option>
        <option value="NZD">NZD New Zealand Dollar</option>
        <option value="PHP">PHP Philippine Peso</option>
        <option value="SGD">SGD Singapore Dollar</option>
        <option value="THB">THB Thai Baht</option>
        <option value="ZAR">ZAR South African Rand</option>
      </select>
      <button type="submit">Get exchange rate</button>
    </form>
  );

  return (
    <div className="Data">
      <h1>🪙 Currency Converter</h1>
      <h2>
        Get Accurate and Real-Time Exchange Rates Today with Our Currency
        Converter Web App!
      </h2>
      <p id="description-text">
        Say goodbye to the complexities of international currency conversion and
        embrace the simplicity and efficiency. Our user-friendly web app
        empowers you to effortlessly convert currencies from around the world,
        providing you with real-time, accurate exchange rates at your
        fingertips.
      </p>
      {formError && <p>Please fill in all the fields.</p>}
      {form}
    </div>
  );
}
