import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./navbar.css";

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="Title">
        <h2>AR Clothing</h2>
      </div>
      <div className="burger">
        <Menu noOverlay onStateChange={toggleMenu}>
          <a className="menu-item" href="/">
            Mon compte
          </a>
          <a className="menu-item" href="/">
            Mes favoris
          </a>
          <a className="menu-item" href="/">
            Ma taille
          </a>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
