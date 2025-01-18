import React from "react";
import { useParams } from "react-router-dom";
import MenuItem from "./MenuItem";

const RestaurantMenu = ({ dishes, restaurants, restaurantdishes, onAdd, onMin }) => {
  const { id } = useParams();
  const restaurantId = parseInt(id, 10);

 
  const restaurant = restaurants.find((restaurant) => restaurant.id === restaurantId);

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
      <div className="menu-header">
        
        <h2>{restaurant ? `${restaurant.name} - Meni` : "Meni"}</h2>
      </div>
      {filteredDishes.length > 0 ? (
        <ul className="menu-list">
          {filteredDishes.map((dish) => (
            <MenuItem
              key={dish.id}
              keyr={restaurant.id}
              name={dish.name}
              description={dish.description}
              price={dish.price}
              amount={dish.amount}
              onAdd={onAdd}
              onMin={onMin}
              inCart={1}
            />
          ))}
        </ul>
      ) : (
        <p className="no-dishes">Nema dostupnih jela za ovaj restoran...</p>
      )}
    </div>
  );
};

export default RestaurantMenu;