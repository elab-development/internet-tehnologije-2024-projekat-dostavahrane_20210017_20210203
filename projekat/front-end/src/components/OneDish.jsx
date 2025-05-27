import React from 'react';

//za css camelCase notacija
function OneDish({dish}) {
   const stil = {margin: 1 + "em", borderStyle: "dotted"};
  return (
    <div className="dish-card" style={stil}>
      <img classname="dish-card-img-top" src="https:/picsum.photos/200" alt="Slika 1"/> 
      <div className="dish-card-body">
        <h3 className="dish-card-title">{dish.name}</h3>
        <p className="dish-card-text">{dish.description}</p>
      </div>
    </div>
  )
}

export default OneDish
