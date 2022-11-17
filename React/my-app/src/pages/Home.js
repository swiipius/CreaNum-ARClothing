import React from "react";
import './Home.css';
import Navbar from "../components/navbar";
import Card from "../components/card";
import ARKit from './image/arkit.png'

function Home() {

  return (
    <div className="App">
      <Navbar />
      <div className="menu-scroll-h" >
        <Card name="shirt" description="Ceci est un t-shirt" image="5" size="M" fav="1" />
        <Card name="Jeans" description="Ceci est un jeans" image="3" size="36" fav="0" />
        <Card name="Hoodie" description="Ceci est un hoodie" image="2" size="L" fav="1" />
        <Card name="Pants" description="Ceci est un pantalon" image="4" size="41" fav="1" />
      </div >
      <div className="AR-button-container">
        <a href="#AR.js"><img src={ARKit} alt={"AR Kit Logo"} className="arkit-logo" /></a>
      </div>
    </div>
  );
}

export default Home;
