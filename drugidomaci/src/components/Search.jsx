import React, { useState } from 'react';

const Search = ({ restaurants, dishes }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    
    const filteredRestaurants = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(term)
    );

    const filteredDishes = dishes.filter((dish) =>
      dish.name.toLowerCase().includes(term)
    );

    setResults([...filteredRestaurants, ...filteredDishes]);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Pretraži svoj omiljeni restoran ili jelo.."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="results-container">
        {results.map((item, index) => (
          <div key={index} className="result-item">
            <h3>{item.name}</h3>
            <p>{item.description || "Dish without description"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
