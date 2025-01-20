import React from 'react';
import { useNavigate } from 'react-router-dom';

function OneRestaurant({restaurant, cat}) {
    const stil = {margin: 1 + "em", cursor: "pointer"};

    const navigate = useNavigate();

    const handleRestaurantClick = () => {
    navigate(`/restaurants/${restaurant.id}/menu`);
  };

   return (
      <div className={cat === 0 ? "card" : "restaurantscat-card"} style={stil} onClick={handleRestaurantClick}>
        <img className={cat === 0 ? "card-img-top" : "restaurantscat-card-img-top"}  src={restaurant.pic} alt="Slika 1"/> 
        <div className={cat === 0 ? "card-body" : "restaurantscat-card-body"}>
          <h3 className={cat === 0 ? "card-title" : "restaurantscat-card-title"}>{restaurant.name}</h3>
          <p className={cat === 0 ? "card-text" : "restaurantscat-card-text"}>{restaurant.description}</p>
        </div>
      </div>
    )
}

export default OneRestaurant;


