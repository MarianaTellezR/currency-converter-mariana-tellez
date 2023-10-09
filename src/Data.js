import React, { useState } from "react";

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
      <input
        type="text"
        placeholder="Enter an amount"
        onChange={handleInputChange}
        name="amount"
      />
      <select
        value={inputs.from}
        name="from"
        id="from"
        onChange={handleInputChange}
      >
        <option value=""></option>
        <option value="yen">YEN</option>
        <option value="dolar">DOLAR</option>
        <option value="libra">LIBRA</option>
      </select>
      <select value={inputs.to} name="to" id="to" onChange={handleInputChange}>
        <option value=""></option>
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
      {formError && <p>Please fill in all the fields.</p>}
      {form}
    </div>
  );
}
