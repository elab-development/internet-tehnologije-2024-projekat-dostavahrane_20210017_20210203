import React from 'react'
import OneDish from './OneDish'

const Dishes = ({dishes}) => {
  return (
      <div className="dishes-container">
      {dishes.map((dish) => (
        <OneDish key={dish.id} dish={dish} />
      ))}
      </div>
  )
}

export default Dishes
