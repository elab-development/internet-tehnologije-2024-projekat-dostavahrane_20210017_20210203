import React from 'react'
import OneRestaurant from './OneRestaurant'
const Restaurants = ({restaurants}) => {

    


  return (
    <div className="restaurants-carousel">
      {restaurants.map((restaurant) => (
        <OneRestaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  )
}

export default Restaurants
