import React from "react";

export default function DisplayResults(props) {
  return (
    <div className="DisplayResults">
      <h3>{props.amount}</h3>
      <h3>{props.base}</h3>
      <h3>{props.objective}</h3>
      <h3>{props.result}</h3>
    </div>
  );
}
