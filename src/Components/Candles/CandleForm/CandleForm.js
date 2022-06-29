import React from "react";
import classes from "./CandleForm.module.css";

const CandleForm = function (props) {
  return (
    <form className={classes.form}>
      <div className={classes["input-container"]}>
        <label>Amount</label>
        <input type="number" min="1" max="5" defaultValue="1"></input>
      </div>
      <div className={classes["button-container"]}>
        <button>Add to Cart</button>
      </div>
    </form>
  );
};

export default CandleForm;
