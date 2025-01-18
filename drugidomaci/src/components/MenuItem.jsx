import React from "react";
import { ImPlus, ImMinus } from "react-icons/im";

const MenuItem = ({ name, description, price, onAdd, onMin, inCart, key, keyr, amount }) => {
  
  return (
    <li className={inCart === 1 ? "menu-item" : "menu-item-in-cart" }>
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">{price} RSD</p>
      {inCart === 0 ? <p>{amount}</p> : <></>}
      {inCart === 1 ? <div className="divContainer">
      <button className="btnAddRemove imPlus"
  onClick={() => { 
    onAdd(name, keyr); 
  }}>
          <ImPlus />
        </button>
        <button className="btnAddRemove imMinus"
         onClick={() => { 
          onMin(name, keyr); 
        }}>
          <ImMinus />
        </button>
      </div> : <></>}
      
    </li>
  );
};

export default MenuItem;