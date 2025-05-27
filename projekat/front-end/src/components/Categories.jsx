import React from 'react';
import OneCategory from './OneCategory';
import PopularDishesCarousel from './PopularDishesCarousel';
import { useState } from "react";
import OneRestaurant from './OneRestaurant';

const Categories = ({ categories,dishes,restaurants }) => {
  const popularDishes = dishes.filter((dish) => dish.isPopular);
  const [displayedRestaurants, setDisplayedRestaurants] = useState([]);
  const handleCategoryClick = (categoryId) => {
    const filteredRestaurants = restaurants.filter((restaurant) =>
      restaurant.categories.includes(categoryId)
    );
    setDisplayedRestaurants(filteredRestaurants);
  };

  return (
    <div>
    <h1>Kategorije</h1>
      <div className="categories-container">
      {categories.map((category) => (
        <OneCategory key={category.id} category={category} onCategoryClick={handleCategoryClick}/>
      ))}
      </div>
      <div className="restaurantscat">
        {displayedRestaurants.length > 0 ? (
          displayedRestaurants.map((restaurant) => (
            <OneRestaurant key={restaurant.id} restaurant={restaurant} cat={1}/>
          ))
        ) : (
          <br></br>
        )}
      </div>
    <h2><i>A tu su i najpopularnija jela...</i></h2> 
    <PopularDishesCarousel dishes={popularDishes} />
    </div>
  );
};

export default Categories;