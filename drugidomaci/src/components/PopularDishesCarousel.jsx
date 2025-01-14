import React, { useState, useEffect } from 'react';

const PopularDishesCarousel = ({ dishes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dishes.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [dishes.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + dishes.length) % dishes.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dishes.length);
  };

  return (
    <div className="dish-carousel-container">
      <button className="dish-carousel-btn left-btn" onClick={goToPrevious}>
        ←
      </button>
      <div className="dish-carousel-slide">
        <img
          src={dishes[currentIndex].pic}
          alt={dishes[currentIndex].name}
          className="dish-carousel-image"
        />
        <div className="dish-carousel-text">
          <h3>{dishes[currentIndex].name}</h3>
          <p>{dishes[currentIndex].description}</p>
        </div>
      </div>
      <button className="dish-carousel-btn right-btn" onClick={goToNext}>
        →
      </button>
    </div>
  );
};

export default PopularDishesCarousel;
