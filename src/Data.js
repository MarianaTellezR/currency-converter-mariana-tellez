import React, { useState } from "react";

export default function Data() {
  const [data, setData] = useState({
    amount: 10,
    from: "USD",
    to: "MXN"
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(data);
  }

  function updateAmount(event) {
    setData({...data, amount: (event.target.value)})
  }

  function updateFrom(event) {
    setData({ ...data, from: event.target.value });
  }

  function updateTo(event) {
    setData({ ...data, to: event.target.value });
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter an amount"
        onChange={updateAmount}
      />
      <select
        value={data.from}
        onChange={updateFrom}
        name="currencyFrom"
        id="currencyFrom"
      >
        <option value="yen">YEN</option>
        <option value="dolar">DOLAR</option>
        <option value="libra">LIBRA</option>
      </select>
      <select
        value={data.to}
        onChange={updateTo}
        name="currencyTo"
        id="currencyTo"
      >
        <option value="yen">YEN</option>
        <option value="dolar">DOLAR</option>
        <option value="libra">LIBRA</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  );

  return (
    <div className="Data">
      <h2>Get your exchange rate today!</h2>
      {form}
    </div>
  );
}
