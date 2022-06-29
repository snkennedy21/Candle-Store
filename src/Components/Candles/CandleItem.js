import React from "react";
import classes from "./CandleItem.module.css";
import CandleForm from "./CandleForm/CandleForm";

const CandleItem = function (props) {
  return (
    <li className={classes.item}>
      <div className={classes.candle}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <CandleForm></CandleForm>
    </li>
  );
};

export default CandleItem;
