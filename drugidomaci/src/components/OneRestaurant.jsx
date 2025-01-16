import React from 'react';
import { useNavigate } from 'react-router-dom';

function OneRestaurant({restaurant}) {
    const stil = {margin: 1 + "em", cursor: "pointer"};

    const navigate = useNavigate();

    const handleRestaurantClick = () => {
    navigate(`/restaurant/${restaurant.id}/menu`);
  };

   return (
      <div className="card" style={stil} onClick={handleRestaurantClick}>
        <img className="card-img-top" src={restaurant.pic} alt="Slika 1"/> 
        <div className="card-body">
          <h3 className="card-title">{restaurant.name}</h3>
          <p className="card-text">{restaurant.description}</p>
        </div>
      </div>
    )
}

export default OneRestaurant;
