import React, { useState, useEffect } from "react";

// Debounce function to limit frequent updates while typing
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const Search = ({ restaurantDishes, dishes, restaurants }) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  
  // Use debounced search query to optimize performance
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const filteredDishes = restaurantDishes
    .map(dishLink => {
      const dish = dishes.find(d => d.id === dishLink.dish_id);
      const restaurant = restaurants.find(r => r.id === dishLink.restaurant_id);
      return { ...dishLink, ...dish, restaurant };
    })
    .filter(dish =>
      dish.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
    restaurant.description.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  // Show results only when there is input
  const showResults = debouncedSearchQuery.length > 0;
  
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Pretraži restorane i jela..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update the search query
      />

<div className={`results-container ${showResults ? 'active' : ''}`}>
        {showResults && (
          <>
            {/* Display dishes results */}
            {filteredDishes.length > 0 && (
              <div>
                <h3>Jela:</h3>
                {filteredDishes.map(dish => (
                  <div key={dish.id} className="result-item">
                    <h4>{dish.name}</h4>
                    <p>{dish.description}</p>
                    <p className="result-price">Cena: {dish.price} RSD</p>
                    <p>Restoran: {dish.restaurant.name}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Display restaurants results */}
            {filteredRestaurants.length > 0 && (
              <div>
                <h3>Restorani:</h3>
                {filteredRestaurants.map(restaurant => (
                  <div key={restaurant.id} className="result-item">
                    <h4>{restaurant.name}</h4>
                    <p>{restaurant.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* No results message */}
            {filteredDishes.length === 0 && filteredRestaurants.length === 0 && (
              <p>Nema rezultata koji odgovaraju pretrazi.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}; 

export default Search;
