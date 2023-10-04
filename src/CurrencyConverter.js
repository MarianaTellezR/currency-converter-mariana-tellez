import React from "react";
import "./CurrencyConverter.css";
import Data from "./Data";

export default function CurrencyConverter() {
  return (
    <div className="CurrencyConverter">
      <div className="row">
        <div className="col-12 col-sm-7 left-side ">
          <Data />
        </div>
        <div className="col-12 col-sm-5 right-side ">Right side</div>
      </div>
    </div>
  );
}
