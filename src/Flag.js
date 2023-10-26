import React from "react";

export default function Flag(props) {
  return (
    <div className="Flags">
      <img src={require(`./img/flags/${props.flag}.png`)} alt={props.flag} />
      <h1>{props.flag}</h1>
    </div>
  );
}
