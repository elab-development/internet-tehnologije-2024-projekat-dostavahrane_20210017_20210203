import React from 'react';
import MenuItem from "./MenuItem";

function Cart({ dishes, restaurantdishes, items, onAdd, onMin }) {
  const cartItems = items;
  console.log(items);

  return (
    <div className="menu-container">
      <ul className="menu-list">
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            const restaurantDish = restaurantdishes.find(
              (rd) => rd.dish_id === item.dish_id && rd.restaurant_id === item.restaurant_id
            );
            const dish = dishes.find((d) => d.id === item.dish_id);

            if (!restaurantDish || !dish) return null;

            return (
              <div>
              <MenuItem
                keyd={item.dish_id}
                name={item.name}
                description={dish.description}
                price={restaurantDish.price}
                amount={item.quantity}
                inCart={0}
                keyr={item.restaurant_id}
                onAdd={onAdd}
                onMin={onMin}
              />
                
            </div>
            );
          })
        ) : (
          <li>Korpa je prazna.</li>
        )}
      </ul>
      {cartItems.length > 0 ? <div className="cart-total">
                <h3>Ukupno:</h3>
                <p className="cart-total-price">
                  {cartItems
                    .reduce((total, item) => {
                      const restaurantDish = restaurantdishes.find(
                        (rdish) =>
                          rdish.dish_id === item.dish_id &&
                          rdish.restaurant_id === item.restaurant_id
                      );
                      return total + (restaurantDish?.price || 0) * item.quantity;
                    }, 0)
                    .toFixed(2)} RSD
                </p>
              </div> : <></>}
    </div>
  );
}

export default Cart;
