import "./App.css";
import React from "react";
import Header from "./Components/Layout/Header";
import Candles from "./Components/Candles/Candles";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <main>
        <Candles></Candles>
      </main>
    </React.Fragment>
  );
}

export default App;
