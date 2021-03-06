import React from "react";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";
import backgroundImage from "../../assets/background.webp";

const Header = function (props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Candles</h1>
        <HeaderCardButton openCart={props.openCart} />
      </header>
      <div className={`${classes["main-image"]}`}>
        <img src={backgroundImage} />/
      </div>
    </React.Fragment>
  );
};

export default Header;
