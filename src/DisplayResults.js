import React from "react";
import arrows from "./img/arrow.png";
import "./DisplayResults.css";

export default function DisplayResults(props) {
  const currencies = {
    EUR: {
      name: "Euro",
      locale: "en-EU",
    },
    USD: {
      name: "US Dollar",
      locale: "en-US",
    },
    JPY: {
      name: "Japanese Yen",
      locale: "ja-JP",
    },
    BGN: {
      name: "Bulgarian Lev",
      locale: "bg-BG",
    },
    CZK: {
      name: "Czech Republic Koruna",
      locale: "cs-CZ",
    },
    DKK: {
      name: "Danish Krone",
      locale: "da-DK",
    },
    GBP: {
      name: "British Pound Sterling",
      locale: "en-GB",
    },
    HUF: {
      name: "Hungarian Forint",
      locale: "hu-HU",
    },
    PLN: {
      name: "Polish Zloty",
      locale: "pl-PL",
    },
    RON: {
      name: "Romanian Leu",
      locale: "ro-RO",
    },
    SEK: {
      name: "Swedish Krona",
      locale: "sv-SE",
    },
    CHF: {
      name: "Swiss Franc",
      locale: "de-CH",
    },
    ISK: {
      name: "Icelandic Króna",
      locale: "is-IS",
    },
    NOK: {
      name: "Norwegian Krone",
      locale: "nb-NO",
    },
    HRK: {
      name: "Croatian Kuna",
      locale: "hr-HR",
    },
    RUB: {
      name: "Russian Ruble",
      locale: "ru-RU",
    },
    TRY: {
      name: "Turkish Lira",
      locale: "tr-TR",
    },
    AUD: {
      name: "Australian Dollar",
      locale: "en-AU",
    },
    BRL: {
      name: "Brazilian Real",
      locale: "pt-BR",
    },
    CAD: {
      name: "Canadian Dollar",
      locale: "en-CA",
    },
    CNY: {
      name: "Chinese Yuan",
      locale: "zh-CN",
    },
    HKD: {
      name: "Hong Kong Dollar",
      locale: "zh-HK",
    },
    IDR: {
      name: "Indonesian Rupiah",
      locale: "id-ID",
    },
    ILS: {
      name: "Israeli New Sheqel",
      locale: "he-IL",
    },
    INR: {
      name: "Indian Rupee",
      locale: "en-IN",
    },
    KRW: {
      name: "South Korean Won",
      locale: "ko-KR",
    },
    MXN: {
      name: "Mexican Peso",
      locale: "es-MX",
    },
    MYR: {
      name: "Malaysian Ringgit",
      locale: "ms-MY",
    },
    NZD: {
      name: "New Zealand Dollar",
      locale: "en-NZ",
    },
    PHP: {
      name: "Philippine Peso",
      locale: "fil-PH",
    },
    SGD: {
      name: "Singapore Dollar",
      locale: "en-SG",
    },
    THB: {
      name: "Thai Baht",
      locale: "th-TH",
    },
    ZAR: {
      name: "South African Rand",
      locale: "en-ZA",
    },
  };

  let base = props.base;
  const amount = new Intl.NumberFormat(currencies[base].locale, {
    style: "currency",
    currency: base,
  }).format(props.amount);
  //props.amount;

  let objective = props.objective;
  const result = new Intl.NumberFormat(currencies[objective].locale, {
    style: "currency",
    currency: objective,
  }).format(props.result);

  return (
    <div className="DisplayResults">
      <h1>Your exchange rate</h1>

      <hr />

      <section>
        <h4 className="base-name">{currencies[base].name}</h4>
        <h3>
          {amount} {base}
        </h3>
        <img src={arrows} alt="Conversion" className="arrows" />
        <div className="square">
          <h4 className="objective-name">{currencies[objective].name}</h4>
          <h2>
            {result}
            <small> {objective}</small>
          </h2>
        </div>
      </section>
    </div>
  );
}
