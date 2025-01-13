import React from 'react';

const OneCategory = ( {category}) => {
  return (
    <div className="category-card">
      <div className="category-icon">
        <img src={category.icon} alt={category.name} />
      </div>
      <p className="category-name">{category.name}</p>
    </div>
  )
}

export default OneCategory
