import React from "react";
import { useParams } from "react-router-dom";
import MenuItem from "./MenuItem";

const RestaurantMenu = ({ dishes, restaurantdishes }) => {
  const { id } = useParams();
  const restaurantId = parseInt(id, 10);

  const filteredDishes = restaurantdishes
    .filter((item) => item.restaurant_id === restaurantId)
    .map((item) => {
      const dish = dishes.find((d) => d.id === item.dish_id);
      return {
        ...dish,
        price: item.price,
      };
    });

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>Meni</h2>
      </div>
      {filteredDishes.length > 0 ? (
        <ul className="menu-list">
          {filteredDishes.map((dish) => (
            <MenuItem
              key={dish.id}
              name={dish.name}
              description={dish.description}
              price={dish.price}
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
