import React from "react";
import "./DataResults.css";

export default function DataResults({ data }) {
  return (
    <div>
      <h1>Data Results Child 2</h1>
      <ul>
        <li>Data from Parent Component: {data.amount}</li>
        <li>Data from Parent Component: {data.from}</li>
        <li>Data from Parent Component: {data.to}</li>
      </ul>
    </div>
  );
}
