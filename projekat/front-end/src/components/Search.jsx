import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

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

const Search = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantDishes, setRestaurantDishes] = useState([]);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/restaurants")
      .then((res) => {
        setRestaurants(res.data);
      })
      .catch((err) => {
        console.error("Greška pri dohvaćanju restorana:", err);
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8000/api/dishes")
      .then((res) => {
        setDishes(res.data);
      })
      .catch((err) => {
        console.error("Greška pri dohvaćanju jela:", err);
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8000/api/restaurantdishes")
      .then((res) => {
        setRestaurantDishes(res.data.data); // Ovaj deo proveri da li API vraća ovako
      })
      .catch((err) => {
        console.error("Greška pri dohvaćanju veza jela i restorana:", err);
      });
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const initialQuery = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  
const filteredRestaurants = restaurants.filter(restaurant =>
  restaurant.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
);



const filteredDishes = restaurantDishes.filter(item =>
  item.dish.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
  item.dish.description.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
  item.restaurant.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
);



  const showResults = debouncedSearchQuery.length > 0;

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Pretraži restorane i jela..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className={`results-container ${showResults ? 'active' : ''}`}>
        {showResults && (
          <>
            

            {filteredRestaurants.length > 0 && (
              <div>
                <h3>Restorani:</h3>
                {filteredRestaurants.map(restaurant => (
                  <div
                    key={restaurant.id}
                    className="result-item clickable"
                    onClick={() => navigate(`/restaurants/${restaurant.id}`)}
                  >
                    <h4>{restaurant.name}</h4>
                    <p>{restaurant.description}</p>
                  </div>
                ))}
              </div>
            )}
            {filteredDishes.length > 0 && (
              <div>
                <h3>Jela:</h3>
                {filteredDishes.map(item => (
                  <div
                    key={`${item.dish.id}-${item.restaurant.id}`}
                    className="result-item clickable"
                    onClick={() => navigate(`/restaurants/${item.restaurant.id}`)}
                  >
                    <h4>{item.dish.name}</h4>
                    <p>{item.dish.description}</p>
                    <p className="result-price">Cena: {item.price} RSD</p>
                    <p>Restoran: {item.restaurant.name}</p>
                  </div>
                ))}
              </div>
            )}

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
