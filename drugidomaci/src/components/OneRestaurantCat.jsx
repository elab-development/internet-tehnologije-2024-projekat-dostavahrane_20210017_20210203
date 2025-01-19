import React from 'react';
import { useNavigate } from 'react-router-dom';

function OneRestaurantCat({restaurant}) {
    const stil = {cursor: "pointer"};

    const navigate = useNavigate();

    const handleRestaurantClick = () => {
    navigate(`/restaurants/${restaurant.id}/menu`);
  };

   return (
      <div className="restaurantscat-card" style={stil} onClick={handleRestaurantClick}>
        <img className="restaurantscat-card-img-top" src={restaurant.pic} alt="Slika 1"/> 
        <div className="restaurantscat-card-body">
          <h3 className="restaurantscat-card-title">{restaurant.name}</h3>
          <p className="restaurantscat-card-text">{restaurant.description}</p>
        </div>
      </div>
    )
}

export default OneRestaurantCat;