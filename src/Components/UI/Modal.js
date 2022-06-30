import React from "react";
import classes from "./Modal.module.css";

const Modal = function (props) {
  return (
    <React.Fragment>
      <div
        onClick={props.closeCart}
        className={props.cartIsOpen && classes.backdrop}
      ></div>
      <div className={classes.modal}>{props.cartIsOpen && props.children}</div>
    </React.Fragment>
  );
};

export default Modal;
