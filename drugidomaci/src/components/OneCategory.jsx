import React from 'react';

const OneCategory = ( {category, onCategoryClick}) => {
  return (
    <div className="category-card" onClick={() => onCategoryClick(category.id)}>
      <div className="category-icon">
        <img src={category.icon} alt={category.name} />
      </div>
      <p className="category-name">{category.name}</p>
    </div>
  )
}

export default OneCategory
