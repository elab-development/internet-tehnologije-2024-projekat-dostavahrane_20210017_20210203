import React from 'react';
import { useNavigate } from 'react-router-dom';
import borneopica from "../photos/borneopica.jpg";
import hiltonbiftek from "../photos/hiltonbiftek.jpg";
import pasta from "../photos/pasta.jpg";
import karadjordjeva from '../photos/karadjordjeva.jpg';

function OneRestaurant({ restaurant, cat }) {
  const stil = { margin: '1em', cursor: 'pointer' };
  const navigate = useNavigate();

  
  const imageMap = {
    1: borneopica,
    2: karadjordjeva,
    3: hiltonbiftek,
    4: pasta
  };

  
  const imageSrc = imageMap[restaurant.id] || karadjordjeva;

  const handleRestaurantClick = () => {
    navigate(`/restaurants/${restaurant.id}`);
  };

  return (
    <div
      className={cat === 0 ? 'card' : 'restaurantscat-card'}
      style={stil}
      onClick={handleRestaurantClick}
    >
      <img
        className={cat === 0 ? 'card-img-top' : 'restaurantscat-card-img-top'}
        src={imageSrc}
        alt={restaurant.name}
      />
      <div className={cat === 0 ? 'card-body' : 'restaurantscat-card-body'}>
        <h3 className={cat === 0 ? 'card-title' : 'restaurantscat-card-title'}>
          {restaurant.name}
        </h3>
        <p className={cat === 0 ? 'card-text' : 'restaurantscat-card-text'}>
          {restaurant.description}
        </p>
      </div>
    </div>
  );
}

export default OneRestaurant;
