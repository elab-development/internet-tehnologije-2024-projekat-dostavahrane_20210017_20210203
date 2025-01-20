import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";

const RestaurantMenu = ({ user, dishes, restaurants, restaurantdishes, onAdd, onMin }) => {
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

    const navigate = useNavigate();

     const handleAddDish = (name, keyd, keyr) => {
        if (!user) {
          navigate("/login");
        } else {
          onAdd(name, keyd, keyr);
        }
      };
    
      const handleRemoveDish = (name, keyd, keyr) => {
        if (!user) {
          navigate("/login");
        } else {
          onMin(name, keyd, keyr);
        }
      };

  
  const [sortOption, setSortOption] = useState("");

  
  const sortedDishes = [...filteredDishes].sort((a, b) => {
    if (sortOption === "price-asc") {
      return a.price - b.price;
    }
    if (sortOption === "price-desc") {
      return b.price - a.price;
    }
    if (sortOption === "name-asc") {
      return a.name.localeCompare(b.name);
    }
    if (sortOption === "name-desc") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>{restaurant ? `${restaurant.name} - Meni` : "Meni"}</h2>

       
        <div className="sort-controls">
          <label htmlFor="sort">Sortiraj prema: </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Izaberi...</option>
            <option value="price-asc">Ceni (rastuće)</option>
            <option value="price-desc">Ceni (opadajuće)</option>
            <option value="name-asc">Imenu (A-Z)</option>
            <option value="name-desc">Imenu (Z-A)</option>
          </select>
        </div>
      </div>

      {sortedDishes.length > 0 ? (
        <ul className="menu-list">
          {sortedDishes.map((dish) => (
            <MenuItem
              keyd={dish.id}
              keyr={restaurant.id}
              name={dish.name}
              description={dish.description}
              price={dish.price}
              amount={dish.amount}
              onAdd={handleAddDish}
              onMin={handleRemoveDish}
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
