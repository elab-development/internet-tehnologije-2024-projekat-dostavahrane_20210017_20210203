import React, { useState } from "react";
import MenuItem from "./MenuItem";

function Cart({ dishes, restaurants, restaurantdishes, items, onAdd, onMin, onPlaceOrder }) {
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const [isOrderSuccessful, setIsOrderSuccessful] = useState(false);
  const [addressError, setAddressError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const cartItems = items;


  const handlePlaceOrder = () => {
    if (!address || !phoneNumber) {
      alert("Molimo unesite adresu i broj telefona.");
      return;
    }

    onPlaceOrder(address, phoneNumber);

    setIsOrderSuccessful(true);
    setIsOrderConfirmed(true);
  };

  return (
    <div className="menu-container">
      <ul className="menu-list">
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            const restaurantDish = restaurantdishes.find(
              (rd) => rd.dish_id === item.dish_id && rd.restaurant_id === item.restaurant_id
            );
            const dish = dishes.find((d) => d.id === item.dish_id);
            const restaurant = restaurants.find((r) => r.id === item.restaurant_id);

            if (!restaurantDish || !dish) return null;

            return (
              <div key={item.dish_id}>
                <MenuItem
                  keyd={item.dish_id}
                  name={item.name}
                  description={dish.description}
                  restaurantname={restaurant.name}
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

      {cartItems.length > 0 && (
  <div className="cart-total">
    <h3>Ukupno:</h3>
    <p className="cart-total-price">
      {(() => {
        const totalWithoutDelivery = cartItems.reduce((total, item) => {
          const restaurantDish = restaurantdishes.find(
            (rdish) =>
              rdish.dish_id === item.dish_id &&
              rdish.restaurant_id === item.restaurant_id
          );
          return total + (restaurantDish?.price || 0) * item.quantity;
        }, 0);

        const deliveryFee = cartItems.length <= 2 ? 200 : 250;
        const totalWithDelivery = totalWithoutDelivery + deliveryFee;

        return `${totalWithDelivery.toFixed(2)} RSD (Dostava: ${deliveryFee} RSD)`;
      })()}
    </p>
  </div>
)}

      {cartItems.length > 0 && (
        <div className="order-form">
          <h3>Unesite adresu i broj telefona</h3>
          <div className="form-group">
            <label htmlFor="address">Adresa:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => {
                const value = e.target.value;
                setAddress(value);
                if (value.trim().length < 8 || !/\d/.test(value)) {
                  setAddressError("Adresa mora imati bar 8 karaktera i sadržati broj.");
                } else {
                  setAddressError("");
                }
              }}
              placeholder="Unesite adresu"
              required
            />
            {addressError && <p className="error-message">{addressError}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Broj telefona:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => {
                const value = e.target.value;
                setPhoneNumber(value);
                if (!/^06\d{7,}$/.test(value)) {
                  setPhoneError("Broj telefona mora počinjati sa 06 i imati najmanje 9 cifara.");
                } else {
                  setPhoneError("");
                }
              }}
              placeholder="Unesite broj telefona"
              required
            />
            {phoneError && <p className="error-message">{phoneError}</p>}
          </div>
          <button onClick={handlePlaceOrder} className="btn-confirm-order" disabled={!!addressError || !!phoneError}>
            Potvrdi porudžbinu
          </button>
        </div>
      )}

      {isOrderConfirmed && (
        <div className="order-confirmation-dialog">
          {isOrderSuccessful ? (
            <p>Uspešno je evidentirana vaša porudžbina!</p>
          ) : (
            <p>Došlo je do greške prilikom poručivanja. Pokušajte ponovo.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;

