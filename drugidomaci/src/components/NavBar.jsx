import React from 'react'
import { PiForkKnifeBold } from "react-icons/pi";
function NavBar() {
  return (
    <div className="navBar">
      <a>Menus</a>
      <div className='cart-items'>
        <PiForkKnifeBold/>
        <p className="cart-num">0</p>
      </div>
    </div>
  )
}

export default NavBar
