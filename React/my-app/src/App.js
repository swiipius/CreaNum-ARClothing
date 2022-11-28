import React from "react";
import './App.css';
import Navbar from "./component/navbar";
import Card from "./component/card";

function App() {

  function openAR() {
    alert("AR");
  }

  return (
    <div className="App">
      <Navbar />
      <div className="menu-scroll-h" >
        <Card name="shirt" description="None" image="../image/arkit.png" size="None" />
        <Card name="Jeans" description="None" image="None" size="None" />
        <Card name="Hoodie" description="None" image="None" size="None" />
        <Card name="Pants" description="None" image="None" size="None" />
      </div >
      <div className="AR-button-container">
        <input className="AR-button" type="button" value="" onClick={openAR}></input>
      </div>
    </div>
  );
}

export default App;
