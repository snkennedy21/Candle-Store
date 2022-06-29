import React from "react";
import classes from "./Candles.module.css";
import CandleItem from "./CandleItem";
import Card from "../UI/Card";

const CANDLE_STOCK = [
  {
    id: "el1",
    name: "Teakwood",
    description: "Somber scents of smokey teakwood to embolden your home",
    price: 39.99,
  },
  {
    id: "el2",
    name: "Saffron & Sage",
    description: "Subtle scents of saffron & sage add vibrancy to any room",
    price: 34.99,
  },
  {
    id: "el3",
    name: "Pine",
    description:
      "The smell of pine is the perfect christmas present for your loved ones",
    price: 39.99,
  },
  {
    id: "el4",
    name: "Tobacco & Citrus",
    description:
      "Scents of citrus and tobacco combine to form a wholesome and sensual aroma",
    price: 45.99,
  },
];

const Candles = function () {
  const mappedItems = CANDLE_STOCK.map((candle) => (
    <CandleItem
      key={candle.id}
      name={candle.name}
      description={candle.description}
      price={candle.price}
    ></CandleItem>
  ));

  return (
    <section className={classes.candles}>
      <Card>
        <ul>{mappedItems}</ul>
      </Card>
    </section>
  );
};

export default Candles;
