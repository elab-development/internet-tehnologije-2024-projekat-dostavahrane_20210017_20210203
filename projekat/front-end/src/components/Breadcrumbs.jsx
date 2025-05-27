import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  // Razdvajanje puta na delove (npr. /restaurants/1/menus -> ['restaurants', '1', 'menus'])
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrumbs">
      <Link to="/">Početna</Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const label = value.charAt(0).toUpperCase() + value.slice(1);

        return (
          <span key={to}>
            <span className="separator"> / </span>
            <Link to={to}>{label}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
