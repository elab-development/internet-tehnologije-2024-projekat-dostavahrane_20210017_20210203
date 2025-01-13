import React from 'react'

function OneRestaurant({restaurant}) {
    const stil = {margin: 1 + "em"};

   return (
      <div className="card" style={stil}>
        <img className="card-img-top" src={restaurant.pic} alt="Slika 1"/> 
        <div className="card-body">
          <h3 className="card-title">{restaurant.name}</h3>
          <p className="card-text">{restaurant.description}</p>
        </div>
      </div>
    )
}

export default OneRestaurant
