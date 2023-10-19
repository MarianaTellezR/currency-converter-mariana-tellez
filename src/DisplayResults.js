import React from "react";
import arrows from "./img/arrow.png";
import "./DisplayResults.css";

export default function DisplayResults(props) {
  return (
    <div className="DisplayResults">
      <h1>Your exchange rate</h1>

      <h4>US Dollar</h4>
      <h3>
        {props.amount} {props.base}
      </h3>
      <img src={arrows} alt="Conversion" className="arrows" />
      <div className="circle">
        <h4>Mexican Peso</h4>
        <h2>
          {props.result}
          <small> {props.objective}</small>
        </h2>
      </div>
    </div>
  );
}
