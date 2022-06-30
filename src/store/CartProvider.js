import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = function (state, action) {
  if (action.type === "ADD") {
  }
  if (action.type === "REMOVE") {
  }
  return defaultState;
};

const CartProvider = function (props) {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultState);

  const addItemToCartHandler = function (item) {
    dispatchCart({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = function (id) {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    amount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
