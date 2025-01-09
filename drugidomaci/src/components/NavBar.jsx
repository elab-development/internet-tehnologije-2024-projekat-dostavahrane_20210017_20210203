import React from "react";
import { PiForkKnifeBold } from "react-icons/pi";
import { FaRegUserCircle, FaHome } from "react-icons/fa";
import { GrRestaurant } from "react-icons/gr";
import { GiHotMeal } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import quickbite_transparent from "../photos/quickbite_transparent.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <div className="nav-left">
        <div className="nav-content">
          <FaHome />
          <Link to="/">Početna</Link>
        </div>
        <div className="nav-content">
          <GrRestaurant />
          <a href="#">Restorani</a>
        </div>
        <div className="nav-content">
          <GiHotMeal />
          <a href="#">Kategorije</a>
        </div>
        <div className="nav-content">
          <IoSearch />
          <a href="#">Pretraga</a>
        </div>
      </div>

      <div className="nav-logo">
      <Link to="/">
      <img className="logo-image" src={quickbite_transparent} alt="Slika 1"/>
      </Link>
      </div>

      <div className="nav-right">
        <div className="nav-content">
          <PiForkKnifeBold />
          <p className="cart-num">0</p>
        </div>
        <Link to="/login" className="nav-content">
          <FaRegUserCircle />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;

