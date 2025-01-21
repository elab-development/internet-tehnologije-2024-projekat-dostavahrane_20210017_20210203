import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";
import useMenu from "../hooks/UseMenu"; // Import kuke

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
        amount: item.amount,
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

  // Koristimo `useMenu`
  const {
    paginatedDishes,
    totalPages,
    currentPage,
    setCurrentPage,
    sortOption,
    setSortOption,
    searchQuery,
    setSearchQuery,
    priceFilter,
    setPriceFilter,
  } = useMenu(filteredDishes, 5);

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>{restaurant ? `${restaurant.name} - Meni` : "Meni"}</h2>

        {/* Filtriranje */}
        <div className="filter-controls">
          <label htmlFor="search">Pretraži jela: </label>
          <input
            id="search"
            type="text"
            placeholder="Unesite naziv jela..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filtriranje po ceni */}
        <div className="price-filter-controls">
          <label htmlFor="minPrice">Cena od: </label>
          <input
            id="minPrice"
            type="number"
            placeholder="Min cena"
            value={priceFilter.min}
            onChange={(e) => setPriceFilter({ ...priceFilter, min: e.target.value })}
          />
          <label htmlFor="maxPrice">do: </label>
          <input
            id="maxPrice"
            type="number"
            placeholder="Max cena"
            value={priceFilter.max}
            onChange={(e) => setPriceFilter({ ...priceFilter, max: e.target.value })}
          />
        </div>

        {/* Sortiranje */}
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

      {/* Lista jela */}
      {paginatedDishes.length > 0 ? (
        <ul className="menu-list">
          {paginatedDishes.map((dish) => (
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

      {/* Paginacija */}
      <div className="pagination-controls">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prethodna
        </button>
        <span>
          Stranica {currentPage} od {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Sledeća
        </button>
      </div>
    </div>
  );
};

export default RestaurantMenu;

