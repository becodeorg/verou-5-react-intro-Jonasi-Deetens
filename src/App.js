import { useState } from "react";
import Header from "./components/Header";
import Paper from "./components/Paper";

function App() {

  return (
    <div className="App">
      < Header />
      <main className="main">
        <picture className="plant-picture">
          <img className="plant-image" src={require("./plant.png")} alt="top down view picture of a plant 1" width="200px" height="200px"/>
        </picture>
        < Paper />
        <picture className="plant-picture">
          <img className="plant-image" src={require("./plant.png")} alt="top down view picture of a plant 2" width="200px" height="200px"/>
        </picture>
      </main>
      <picture className="chair-picture">
        <img className="chair-image" src={require("./chair.png")} alt="top down view picture of a chair" width="300px" height="300px"/>
      </picture>
    </div>
  );
}

export default App;
