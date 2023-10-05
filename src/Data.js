import React from "react";

export default function Data() {
  let amount = 2459;
  let from = "USD";
  let to = "MXN";

  return (
    <div className="Data">
      <h2>Get your exchange rate today!</h2>
      <p>Amount: {amount}</p>
      <p>From: {from}</p>
      <p>To: {to}</p>
    </div>
  );
}
