import React from "react";
import "./Flag.css";
import AUD from "./img/flags/AUD.png";
import BGN from "./img/flags/BGN.png";
import BRL from "./img/flags/BRL.png";
import CAD from "./img/flags/CAD.png";
import CHF from "./img/flags/CNY.png";
import CNY from "./img/flags/CNY.png";
import CZK from "./img/flags/CZK.png";
import DKK from "./img/flags/DKK.png";
import EUR from "./img/flags/EUR.png";
import GBP from "./img/flags/GBP.png";
import HKD from "./img/flags/HKD.png";
import HRK from "./img/flags/HRK.png";
import HUF from "./img/flags/HUF.png";
import IDR from "./img/flags/IDR.png";
import ILS from "./img/flags/ILS.png";
import INR from "./img/flags/INR.png";
import ISK from "./img/flags/ISK.png";
import JPY from "./img/flags/JPY.png";
import KRW from "./img/flags/KRW.png";
import MXN from "./img/flags/MXN.png";
import MYR from "./img/flags/MYR.png";
import NOK from "./img/flags/NOK.png";
import NZD from "./img/flags/NZD.png";
import PHP from "./img/flags/PHP.png";
import PLN from "./img/flags/PLN.png";
import RON from "./img/flags/RON.png";
import RUB from "./img/flags/RUB.png";
import SEK from "./img/flags/SEK.png";
import SGD from "./img/flags/SGD.png";
import THB from "./img/flags/THB.png";
import TRY from "./img/flags/TRY.png";
import USD from "./img/flags/USD.png";
import ZAR from "./img/flags/ZAR.png";

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
