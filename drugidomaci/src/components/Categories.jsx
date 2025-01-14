import React from 'react';
import OneCategory from './OneCategory';
import PopularDishesCarousel from './PopularDishesCarousel';
import { useState } from "react";

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
            <div className="restaurantscat-card">
            <img className="restaurantscat-card-img-top" src={restaurant.pic} alt="Slika 1"/> 
            <div className="restaurantscat-card-body">
              <h3 className="restaurantscat-card-title">{restaurant.name}</h3>
              <p className="restaurantscat-card-text">{restaurant.description}</p>
            </div>
          </div>
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