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
        <option value="eur">EUR Euro</option>
        <option value="usd">USD US Dollar</option>
        <option value="jpy">JPY Japanese yen</option>
        <option value="bgn">BGN Bulgarian Lev</option>
        <option value="czk">CZK Czech Republic Koruna</option>
        <option value="dkk">DKK Danish Krone</option>
        <option value="gbp">GBP British Pound Sterling</option>
        <option value="huf">HUF Hungarian Forint</option>
        <option value="pln">PLN Polish Zloty</option>
        <option value="ron">RON Romanian Leu</option>
        <option value="sek">SEK Swedish Krona</option>
        <option value="chf">CHF Swiss Franc</option>
        <option value="isk">ISK Icelandic Króna</option>
        <option value="nok">NOK Norwegian Krone</option>
        <option value="hrk">HRK Croatian Kuna</option>
        <option value="rub">RUB Russian Ruble</option>
        <option value="try">TRY Turkish Lira</option>
        <option value="aud">AUD Australian Dollar</option>
        <option value="brl">BRL Brazilian Real</option>
        <option value="cad">CAD Canadian Dollar</option>
        <option value="cny">CNY Chinese Yuan</option>
        <option value="hkd">HKD Hong Kong Dollar</option>
        <option value="idr">IDR Indonesian Rupiah</option>
        <option value="ils">ILS Israeli New Sheqel</option>
        <option value="inr">INR Indian Rupee</option>
        <option value="krw">KRW South Korean Won</option>
        <option value="mxn">MXN Mexican Peso</option>
        <option value="myr">MYR Malaysian Ringgit</option>
        <option value="nzd">NZD New Zealand Dollar</option>
        <option value="php">PHP Philippine Peso</option>
        <option value="sgd">SGD Singapore Dollar</option>
        <option value="thb">THB Thai Baht</option>
        <option value="zar">ZAR South African Rand</option>
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
        <option value="eur">EUR Euro</option>
        <option value="usd">USD US Dollar</option>
        <option value="jpy">JPY Japanese yen</option>
        <option value="bgn">BGN Bulgarian Lev</option>
        <option value="czk">CZK Czech Republic Koruna</option>
        <option value="dkk">DKK Danish Krone</option>
        <option value="gbp">GBP British Pound Sterling</option>
        <option value="huf">HUF Hungarian Forint</option>
        <option value="pln">PLN Polish Zloty</option>
        <option value="ron">RON Romanian Leu</option>
        <option value="sek">SEK Swedish Krona</option>
        <option value="chf">CHF Swiss Franc</option>
        <option value="isk">ISK Icelandic Króna</option>
        <option value="nok">NOK Norwegian Krone</option>
        <option value="hrk">HRK Croatian Kuna</option>
        <option value="rub">RUB Russian Ruble</option>
        <option value="try">TRY Turkish Lira</option>
        <option value="aud">AUD Australian Dollar</option>
        <option value="brl">BRL Brazilian Real</option>
        <option value="cad">CAD Canadian Dollar</option>
        <option value="cny">CNY Chinese Yuan</option>
        <option value="hkd">HKD Hong Kong Dollar</option>
        <option value="idr">IDR Indonesian Rupiah</option>
        <option value="ils">ILS Israeli New Sheqel</option>
        <option value="inr">INR Indian Rupee</option>
        <option value="krw">KRW South Korean Won</option>
        <option value="mxn">MXN Mexican Peso</option>
        <option value="myr">MYR Malaysian Ringgit</option>
        <option value="nzd">NZD New Zealand Dollar</option>
        <option value="php">PHP Philippine Peso</option>
        <option value="sgd">SGD Singapore Dollar</option>
        <option value="thb">THB Thai Baht</option>
        <option value="zar">ZAR South African Rand</option>
      </select>
      <button type="submit">Get exchange rate</button>
    </form>
  );

  return (
    <div className="Data">
      <h2>Get your exchange rate today!</h2>
      <p>
        Say goodbye to the complexities of international currency conversion and
        embrace the simplicity and efficiency of CurrenSee. Our user-friendly
        web app empowers you to effortlessly convert currencies from around the
        world, providing you with real-time, accurate exchange rates at your
        fingertips.
      </p>
      {formError && <p>Please fill in all the fields.</p>}
      {form}
    </div>
  );
}
