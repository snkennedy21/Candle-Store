import classes from "./HeaderCardButton.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCardButton = function (props) {
  const cartContext = useContext(CartContext);
  const numberOfItemsInCart = cartContext.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  return (
    <button onClick={props.openCart} className={classes.button}>
      <FaShoppingCart className={`${classes["button__icon"]}`} size="1.5em" />
      <div className={`${classes["button__number"]}`}>
        {numberOfItemsInCart}
      </div>
    </button>
  );
};

export default HeaderCardButton;
