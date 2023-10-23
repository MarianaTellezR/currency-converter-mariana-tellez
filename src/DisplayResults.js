import React from "react";
import arrows from "./img/arrow.png";
import "./DisplayResults.css";

export default function DisplayResults(props) {
  let amount = props.amount;
  let base = props.base;
  let objective = props.objective;
  let result = props.result;

  return (
    <div className="DisplayResults">
      <h1>Your exchange rate</h1>

      <h4>US Dollar</h4>
      <h3>
        {amount} {base}
      </h3>
      <img src={arrows} alt="Conversion" className="arrows" />
      <div className="square">
        <h4>Mexican Peso</h4>
        <h2>
          {result}
          <small> {objective}</small>
        </h2>
      </div>
    </div>
  );
}
