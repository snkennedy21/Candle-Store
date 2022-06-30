import React from "react";
import classes from "./Cart.module.css";

const Cart = function (props) {
  return (
    <div className={classes["cart-container"]}>
      <div className={classes["cart-list"]}>Teakwood</div>
      <div className={classes["price-container"]}>
        <span className={classes["price-title"]}>Total Amount</span>
        <span className={classes["price"]}>$35.62</span>
      </div>
      <div className={classes["button-container"]}>
        <button onClick={props.closeCart} className={classes["button-close"]}>
          Close
        </button>
        <button className={classes["button-order"]}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
