import classes from "./HeaderCardButton.module.css";
import { FaShoppingCart } from "react-icons/fa";

const HeaderCardButton = function () {
  return (
    <button className={classes.button}>
      <FaShoppingCart className={`${classes["button__icon"]}`} size="1.5em" />
      <div className={`${classes["button__number"]}`}>5</div>
    </button>
  );
};

export default HeaderCardButton;
