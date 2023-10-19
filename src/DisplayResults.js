import React from "react";

export default function DisplayResults(props) {
  return (
    <div className="DisplayResults">
      <h1>Your exchange rate</h1>

      <h4>US Dollar</h4>
      <h3>
        {props.amount} {props.base}
      </h3>
      <p>Flechas Imagen</p>
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
