import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])

  useEffect (() => {
    fetch(API)
    .then(res => res.json())
    .then(sushiData => setSushis(sushiData))
  }, [])

  return (
    <div className="app">
      <SushiContainer sushiArray={sushis}/>
      <Table />
    </div>
  );
}

export default App;
