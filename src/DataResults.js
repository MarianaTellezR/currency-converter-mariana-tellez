import React from "react";

export default function DataResults({data}) {
  return (
    <div>
      <h1>Data Results Child 2</h1>
      <h3>Data from Parent Component: {data.amount}</h3>
      <h3>Data from Parent Component: {data.from}</h3>
      <h3>Data from Parent Component: {data.to}</h3>
    </div>
  );
}
