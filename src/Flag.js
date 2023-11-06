import React from "react";
import "./Flag.css";

export default function Flag(props) {
  // Added path 
  return (
    <div className="Flags">
      <img src={require(`./img/flags/${props.flag}.png`)} alt={props.flag} />
    </div>
  );
}
