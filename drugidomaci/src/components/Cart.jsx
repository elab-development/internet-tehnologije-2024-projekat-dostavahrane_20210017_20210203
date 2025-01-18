import React from 'react'
import { useParams } from "react-router-dom";
import MenuItem from "./MenuItem";

function Cart({ dishes,restaurantdishes, items}) {
    const { id } = useParams();
  const restaurantId = parseInt(id, 10);

  const filteredDishes = restaurantdishes
    .filter((item) => item.restaurant_id === restaurantId)
    .map((item) => {
      const dish = dishes.find((d) => d.id === item.dish_id);
      return {
        ...dish,
        price: item.price,
        amount: item.amount
      };
    });
  return (
    <div className="menu-container">
      
      
        <ul className="menu-list">
          {filteredDishes.map((dish) => (
            <MenuItem
              key={dish.id}
              name={dish.name}
              description={dish.description}
              price={dish.price}
              amount={dish.amount}
              inCart={0}
            />
          ))}
        </ul>
      
    </div>
  )
}

export default Cart
