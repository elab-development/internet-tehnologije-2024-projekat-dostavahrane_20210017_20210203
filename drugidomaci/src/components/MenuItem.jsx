import React from "react";
import { ImPlus, ImMinus } from "react-icons/im";

const MenuItem = ({ name, description, price }) => {
  return (
    <li className="menu-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">{price} RSD</p>
      <div className="divContainer">
      <button className="btnAddRemove imPlus">
          <ImPlus />
        </button>
        <button className="btnAddRemove imMinus">
          <ImMinus />
        </button>
      </div>
    </li>
  );
};

export default MenuItem;