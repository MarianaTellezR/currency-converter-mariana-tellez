import React from "react";
import "./Flag.css";
import AUD from "./img/AUD.png";
import BGN from "./img/BGN.png";
import BRL from "./img/BRL.png";
import CAD from "./img/CAD.png";
import CHF from "./img/CNY.png";
import CNY from "./img/CNY.png";
import CZK from "./img/CZK.png";
import DKK from "./img/DKK.png";
import EUR from "./img/EUR.png";
import GBP from "./img/GBP.png";
import HKD from "./img/HKD.png";
import HRK from "./img/HRK.png";
import HUF from "./img/HUF.png";
import IDR from "./img/IDR.png";
import ILS from "./img/ILS.png";
import INR from "./img/INR.png";
import ISK from "./img/ISK.png";
import JPY from "./img/JPY.png";
import KRW from "./img/KRW.png";
import MXN from "./img/MXN.png";
import MYR from "./img/MYR.png";
import NOK from "./img/NOK.png";
import NZD from "./img/NZD.png";
import PHP from "./img/PHP.png";
import PLN from "./img/PLN.png";
import RON from "./img/RON.png";
import RUB from "./img/RUB.png";
import SEK from "./img/SEK.png";
import SGD from "./img/SGD.png";
import THB from "./img/THB.png";
import TRY from "./img/TRY.png";
import USD from "./img/USD.png";
import ZAR from "./img/ZAR.png";

export default function Flag(props) {
  // Added path
  console.log(props.flag);

  const flagImages = {
    AUD,
    BGN,
    BRL,
    CAD,
    CHF,
    CNY,
    CZK,
    DKK,
    EUR,
    GBP,
    HKD,
    HRK,
    HUF,
    IDR,
    ILS,
    INR,
    ISK,
    JPY,
    KRW,
    MXN,
    MYR,
    NOK,
    NZD,
    PHP,
    PLN,
    RON,
    RUB,
    SEK,
    SGD,
    THB,
    TRY,
    USD,
    ZAR,
  };

  const flagImage = flagImages[props.flag];

  return (
    <div className="Flags">
      <img src={flagImage} alt={props.flag} />
    </div>
  );
}
