import React, { useRef, useEffect, useState } from 'react';
import OneRestaurant from './OneRestaurant';
import MyMap from './MyMap';
import axios from "axios";

const Restaurants = () => {
  const carouselRef = useRef(null);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/api/restaurants")
      .then((res) => {
        console.log(res.data);
        setRestaurants(res.data); 
        setLoading(false);
      })
      .catch((err) => {
        console.error("Greška pri dohvaćanju restorana:", err);
        setLoading(false);
      });
  }, []);

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

      {loading ? (
        <p>Učitavanje restorana...</p>
      ) : (
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
      )}

      <MyMap />
    </div>
  );
};

export default Restaurants;
