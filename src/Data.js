import React, { useState } from "react";

export default function Data() {
  const [amount, setAmount] = useState();

  let from = "USD";
  let to = "MXN";

  function handleSubmit(event) {
    event.preventDefault();
  }

  function updateAmount(event) {
    setAmount(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter an amount"
        onChange={updateAmount}
      />
      <input type="submit" value="Submit" />
    </form>
  );

  return (
    <div className="Data">
      <h2>Get your exchange rate today!</h2>
      <p>Amount: {amount}</p>
      <p>From: {from}</p>
      <p>To: {to}</p>
      {form}
    </div>
  );
}
