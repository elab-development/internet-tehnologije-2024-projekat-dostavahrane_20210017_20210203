import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

//za css camelCase notacija
function OneDish() {
    const stil = {margin: 10 + "em", borderStyle: "dotted"};
  return (
    <div className="card" style={stil}>
      <img classname="card-img-top" src="https:/picsum.photos/200" alt="Slidza 1"/> 
      <div className="card-body">
        <h3 className="card-title">Dish name</h3>
        <p className="card-text">Description of dish</p>
      </div>
      <button className="btn"><CiCirclePlus/></button>
      <button className="btn"><CiCircleMinus/></button>
    </div>
  )
}

export default OneDish
