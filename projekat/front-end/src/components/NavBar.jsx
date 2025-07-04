import { PiForkKnifeBold } from "react-icons/pi";
import { FaRegUserCircle, FaHome } from "react-icons/fa";
import { GrRestaurant } from "react-icons/gr";
import { GiHotMeal } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import quickbite_transparent from "../photos/quickbite_transparent.png";
import { Link } from "react-router-dom";

function NavBar( {user, cartNum}) {
  return (
    <div className="navBar">
      <div className="nav-left">
        <div className="nav-content">
          <FaHome />
          <Link to="/">Početna</Link>
        </div>
        <div className="nav-content">
          <GrRestaurant />
          <Link to="/restaurants">Restorani</Link>
        </div>
        <div className="nav-content">
          <GiHotMeal />
          <Link to="/categories">Kategorije</Link>
        </div>
        <div className="nav-content">
          <IoSearch />
          <Link to="/search">Pretraga</Link>
        </div>
      </div>

      <div className="nav-logo">
      <Link to="/">
      <img className="logo-image" src={quickbite_transparent} alt="Slika 1"/>
      </Link>
      </div>

  <div className="nav-right">
  {user?.role !== "admin" && (
    <div className="nav-content">
      <PiForkKnifeBold />
      <Link to="/cart">
        <p className="cart-num">{cartNum}</p>
      </Link>
    </div>
  )}
  <Link to={user ? "/profile" : "/login"} className="nav-content">
    <FaRegUserCircle />
  </Link>
  </div>
    </div>
  );
}

export default NavBar;

