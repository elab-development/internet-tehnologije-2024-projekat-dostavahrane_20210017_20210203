import React from "react";
import { ImPlus, ImMinus } from "react-icons/im";

const MenuItem = ({ name, userRole, description, restaurantname, price, onAdd, onMin, inCart, keyd, keyr, amount }) => {
  
  return (
    <li className={inCart === 1 ? "menu-item" : "menu-item-in-cart" }>
      <h3>{name}</h3>
      {inCart === 0 && <p>Restoran: {restaurantname}</p>}
      <p>{description}</p>
      <p className="price">{price} RSD</p>
      {inCart === 0 ? <p>{amount}</p> : null}
      <div className="divContainer">
        {userRole !== "admin" && (
          <>
            <button className="btnAddRemove imPlus" onClick={() => onAdd(name, keyd, keyr)}>
              <ImPlus />
            </button>
            <button className="btnAddRemove imMinus" onClick={() => onMin(name, keyd, keyr)}>
              <ImMinus />
            </button>
          </>
        )}
      </div>
    </li>
  );
};
export default MenuItem;