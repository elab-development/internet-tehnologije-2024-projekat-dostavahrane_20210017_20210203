import React from 'react';
import OneCategory from './OneCategory';
import Dishes from './Dishes';

const Categories = ({ categories,dishes }) => {
  return (
    <div>
    <h1>Kategorije</h1>
      <div className="categories-container">
      {categories.map((category) => (
        <OneCategory key={category.id} category={category} />
      ))}
      </div>
    <p><i>Pogledajte listu svih jela koja možete poručiti...</i></p> 
    <Dishes dishes={dishes}/>
    </div>
  );
};

export default Categories;