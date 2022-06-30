import classes from "./App.module.css";
import React from "react";
import { useState } from "react";
import Header from "./Components/Layout/Header";
import Candles from "./Components/Candles/Candles";
import Modal from "./Components/UI/Modal";
import Cart from "./Components/UI/Cart";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCartHandler = function () {
    setCartIsOpen(true);
  };

  const closeCartHandler = function () {
    setCartIsOpen(false);
  };

  return (
    <React.Fragment>
      <Modal cartIsOpen={cartIsOpen} closeCart={closeCartHandler}>
        <Cart closeCart={closeCartHandler}></Cart>
      </Modal>
      <Header openCart={openCartHandler}></Header>
      <main>
        <Candles></Candles>
      </main>
    </React.Fragment>
  );
}

export default App;
