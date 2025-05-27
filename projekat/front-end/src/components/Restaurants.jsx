import React, { useRef } from 'react';
import OneRestaurant from './OneRestaurant';
import MyMap from './MyMap';

const Restaurants = ({ restaurants }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div>
    <h1>Restorani</h1>
    <p>Pregledaj našu raznoliku ponudu restorana i pronađi baš ono što želiš!</p>
      <div className="restaurants-carousel-container">
        <button className="carousel-arrow left" onClick={scrollLeft}>
          &#10094;
        </button>
        <div className="restaurants-carousel" ref={carouselRef}>
          {restaurants.map((restaurant) => (
            <OneRestaurant key={restaurant.id} restaurant={restaurant} cat={0} />
          ))}
        </div>
        <button className="carousel-arrow right" onClick={scrollRight}>
          &#10095;
        </button>
      </div>
      <MyMap/>
    </div>
  );
};

export default Restaurants;


