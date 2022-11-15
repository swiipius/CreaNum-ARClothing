import React from "react";
import './App.css';
import Navbar from "./component/navbar";
import Card from "./component/card";
import ARKit from './image/arkit.png'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="menu-scroll-h" >
        <Card name="shirt" description="Description" image="5" size="Size" />
        <Card name="Jeans" description="None" image="3" size="None" />
        <Card name="Hoodie" description="None" image="2" size="None" />
        <Card name="Pants" description="None" image="4" size="None" />
      </div >
      <div className="AR-button-container">
        <a href="#AR.js"><img src={ARKit} alt={"AR Kit Logo"} className="arkit-logo" /></a>
      </div>
    </div>
  );
}

export default App;
