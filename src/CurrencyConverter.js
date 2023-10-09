import React, {useState} from "react";
import "./CurrencyConverter.css";
import Data from "./Data";
import DataResults from "./DataResults";

export default function CurrencyConverter() {
  const [childData, setChildData] = useState(null);

  const handleData = (data) => {
    console.log("From Parent");
    console.log(data);
    setChildData(data);
  };

  return (
    <div className="CurrencyConverter">
      <div className="row">
        <div className="col-12 col-sm-7 left-side ">
          <Data sendData={handleData} />
        </div>
        <div className="col-12 col-sm-5 right-side ">
          {childData && <DataResults data={childData} />}
        </div>
      </div>
    </div>
  );
}
