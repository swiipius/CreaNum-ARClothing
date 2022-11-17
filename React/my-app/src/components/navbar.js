import React from "react";
import "./navbar.css";
import { Spin as Hamburger } from 'hamburger-react'
import styled from 'styled-components'
import { useState } from "react";

const BurgerOpen = styled.div`
    position: absolute;
    top: 0;
    right: -40vw;
    z-index: 1;
    height: 100vh;
    width: 40vw;
    background: #E8C7DF;
    display: grid;
    grid-template-rows: 20vh 40vh;
  `;

const Navbar = () => {
  const [open, setOpenBurger] = useState(false);

  const changeBurger = () => {
    if (open) {
      closeBurger()
    }
    else {
      openBurger()
    }
  };

  const openBurger = () => {
    setOpenBurger(true);
  };

  const closeBurger = () => {
    setOpenBurger(false);
  }

  return (
    <div className="navbar">
      <div className="Title">
        <h2>AR Clothing</h2>
      </div>
      <div className="burger-container">
        <div className="open-burger">
          <button value="" onClick={changeBurger}><Hamburger duration={0.8} easing="ease-in" rounded className="burger-logo" /></button>
        </div>
        <BurgerOpen className={open ? 'slide-in' : 'slide-out'}>
          <ul>
            <li><a className="menu-item" href="/">
              Mon compte
            </a></li>
            <li><a className="menu-item" href="../favoris.js">
              Mes favoris
            </a></li>
            <li><a className="menu-item" href="/">
              Ma Taille
            </a></li>
          </ul>
        </BurgerOpen>
      </div>
    </div >
  );
};

export default Navbar;
