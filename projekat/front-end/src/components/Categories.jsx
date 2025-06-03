import React, { useState, useEffect } from 'react';
import OneCategory from './OneCategory';
import PopularDishesCarousel from './PopularDishesCarousel';
import OneRestaurant from './OneRestaurant';
import axios from 'axios';


import dish4 from '../photos/dish4.jpg';
import dish8 from '../photos/dish8.png';
import dish9 from '../photos/dish9.jpg';
import dish13 from '../photos/dish13.png';
import dish17 from '../photos/dish17.jpg';
import dish18 from '../photos/dish18.png';
import dish24 from '../photos/dish24.jpg';
import dish34 from '../photos/dish34.png';


const dishImages = {
  4: dish4,
  8: dish8,
  9: dish9,
  13: dish13,
  17: dish17,
  18: dish18,
  24: dish24,
  34: dish34,
};

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [displayedRestaurants, setDisplayedRestaurants] = useState([]);

 
  useEffect(() => {
    axios.get("http://localhost:8000/api/categories")
      .then(res => setCategories(res.data))
      .catch(err => console.error("Greška pri dohvaćanju kategorija", err));
  }, []);

 
  useEffect(() => {
    axios.get("http://localhost:8000/api/dishes")
      .then(res => {
        const dishesWithPics = res.data.map(dish => ({
          ...dish,
          pic: dishImages[dish.id] || null 
        }));
        setDishes(dishesWithPics);
      })
      .catch(err => console.error("Greška pri dohvaćanju jela", err));
  }, []);

  
  useEffect(() => {
    axios.get("http://localhost:8000/api/restaurantcategories")
      .then(res => setRestaurants(res.data))
      .catch(err => console.error("Greška pri dohvaćanju restorana", err));
  }, []);

 
  const handleCategoryClick = (categoryId) => {
    const filteredRestaurants = restaurants.filter(restaurant =>
      restaurant.categories.some(cat => cat.id === categoryId)
    );
    setDisplayedRestaurants(filteredRestaurants);
  };

 
  const popularDishes = dishes.filter(dish => dish.isPopular);

  return (
    <div>
      <h1>Kategorije</h1>

      <div className="categories-container">
        {categories.map(category => (
          <OneCategory
            key={category.id}
            category={category}
            onCategoryClick={handleCategoryClick}
          />
        ))}
      </div>

      <div className="restaurantscat">
        {displayedRestaurants.length > 0 ? (
          displayedRestaurants.map(restaurant => (
            <OneRestaurant
              key={restaurant.id}
              restaurant={restaurant}
              cat={1}
            />
          ))
        ) : (
          <p>Izaberi kategoriju da vidiš restorane</p>
        )}
      </div>

      <h2><i>A tu su i najpopularnija jela...</i></h2>
      <PopularDishesCarousel dishes={popularDishes} />
    </div>
  );
};

export default Categories;

