import React from "react";
import "./RateNumber.scss";

const RateNumber = function (props) {
  console.log(props);
  return (
    <>
      <li className={`rate-number ${props.className}`} onClick={props.onClick}>
        {props.numbers}
      </li>
    </>
  );
};

export default RateNumber;
