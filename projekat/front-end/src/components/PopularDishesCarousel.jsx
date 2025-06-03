import React, { useState, useEffect } from 'react';

const PopularDishesCarousel = ({ dishes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (dishes.length === 0) return; // nema jela, ne pravi interval
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

  if (dishes.length === 0) {
    return <p>Nema jela za prikaz.</p>;
  }

  const currentDish = dishes[currentIndex];

  return (
    <div className="dish-carousel-container">
      <button className="dish-carousel-btn left-btn" onClick={goToPrevious}>
        ←
      </button>
      <div className="dish-carousel-slide">
        <img
          src={currentDish.pic ? currentDish.pic : '/photos/default.jpg'}
          alt={currentDish.name || 'Jelo'}
          className="dish-carousel-image"
          onError={(e) => { e.target.src = '/photos/default.jpg'; }} // fallback ako slika ne postoji
        />
        <div className="dish-carousel-text">
          <h3>{currentDish.name}</h3>
          <p>{currentDish.description}</p>
        </div>
      </div>
      <button className="dish-carousel-btn right-btn" onClick={goToNext}>
        →
      </button>
    </div>
  );
};

export default PopularDishesCarousel;
