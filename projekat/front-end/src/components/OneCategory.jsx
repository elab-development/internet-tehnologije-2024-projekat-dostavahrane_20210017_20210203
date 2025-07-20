import React from 'react';
import burger from '../photos/burger.png';
import smallpizza from '../photos/smallpizza.png';
import pizza from '../photos/pizza.png';
import pasta from '../photos/pasta.png';
import rostilj from '../photos/rostilj.png';
import sendvic from '../photos/sendvic.png';
import salata from '../photos/salata.png';
import pica from '../photos/pica.png';
import desert from '../photos/desert.png';

const OneCategory = ({ category, onCategoryClick }) => {
  const imageMap = {
    1: smallpizza,
    2: pasta,
    3: rostilj,
    4: pizza,
    5: burger,
    6: salata,
    7: sendvic,
    8: pica,
    9: desert,
  };

  const backendImage = category.picture
    ? `http://127.0.0.1:8000/storage/${category.picture}`
    : null;

  const imageSrc = backendImage || imageMap[category.id] || burger;

  return (
    <div
      className="category-card"
      style={{ cursor: 'pointer' }}
      onClick={() => onCategoryClick(category.id)}
    >
      <div className="category-icon">
        <img src={imageSrc} alt={category.name} />
      </div>
      <p className="category-name">{category.name}</p>
    </div>
  );
};

export default OneCategory;

