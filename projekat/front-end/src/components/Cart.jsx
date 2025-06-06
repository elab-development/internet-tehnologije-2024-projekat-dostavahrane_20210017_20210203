import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import axios from "axios";

function Cart({ items, onAdd, onMin, onPlaceOrder }) {
  const [dishes, setDishes] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantDishes, setRestaurantDishes] = useState([]);

  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const [isOrderSuccessful, setIsOrderSuccessful] = useState(false);
  const [addressError, setAddressError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/api/dishes")
      .then(res => {
        setDishes(res.data);
        return axios.get("http://localhost:8000/api/restaurants");
      })
      .then(res => {
        setRestaurants(res.data);
        return axios.get("http://localhost:8000/api/restaurantdishes");
      })
      .then(res => {
        setRestaurantDishes(Array.isArray(res.data.data) ? res.data.data : []);
      })
      .catch(error => {
        console.error("Greška pri učitavanju podataka:", error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (isOrderSuccessful) {
      localStorage.removeItem("cartItems");
    }
  }, [isOrderSuccessful]);

  const handlePlaceOrder = async () => {
    if (!address || !phoneNumber) {
      alert("Molimo unesite adresu i broj telefona.");
      return;
    }
    if (addressError || phoneError) {
      alert("Molimo ispravite greške u adresi ili broju telefona.");
      return;
    }
    if (items.length === 0) {
      alert("Korpa je prazna.");
      return;
    }


    const orderItems = items.map(item => ({
      restaurant_id: item.restaurant_id,
      dish_id: item.dish_id,
      quantity: item.quantity,
      name: dishes.find(d => d.id === item.dish_id)?.name || "Unknown",
    }));

    try {
      await axios.post(
        "http://localhost:8000/api/orders",
        {
          items: orderItems,
          delivery_address: address,
          phone_number: phoneNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem("auth_token")}`,
          },
        }
      );

      setIsOrderSuccessful(true);
      setIsOrderConfirmed(true);
      onPlaceOrder(address, phoneNumber);
    } catch (error) {
      console.error("Greška prilikom slanja porudžbine:", error);
      setIsOrderSuccessful(false);
      setIsOrderConfirmed(true);
      alert("Došlo je do greške prilikom poručivanja. Pokušajte ponovo.");
    }
  };

  const cartItems = items;

  return (
    <div className="menu-container">
      <ul className="menu-list">
        {cartItems.length > 0 ? (
          cartItems.map(item => {
            const dish = dishes.find(d => d.id === item.dish_id);
            const restaurant = restaurants.find(r => r.id === item.restaurant_id);
            const restaurantDish = restaurantDishes.find(
              rd => rd.dish.id === item.dish_id && rd.restaurant.id === item.restaurant_id
            );

            if (!restaurant || !dish || !restaurantDish) return null;

            return (
              <MenuItem
                key={`${item.dish_id}-${item.restaurant_id}`}
                keyd={item.dish_id}
                keyr={item.restaurant_id}
                name={dish.name}
                description={dish.description}
                restaurantname={restaurant.name}
                price={restaurantDish.price}
                amount={item.quantity}
                inCart={0}
                onAdd={onAdd}
                onMin={onMin}
              />
            );
          })
        ) : (
          <li>Korpa je prazna.</li>
        )}
      </ul>

      {cartItems.length > 0 && (
        <>
          <div className="cart-total">
            <h3>Ukupno:</h3>
            <p className="cart-total-price">
              {(() => {
                const total = cartItems.reduce((sum, item) => {
                  const price =
                    restaurantDishes.find(
                      rd => rd.dish.id === item.dish_id && rd.restaurant.id === item.restaurant_id
                    )?.price || 0;
                  return sum + price * item.quantity;
                }, 0);
                const delivery = cartItems.length <= 2 ? 200 : 250;
                return `${(total + delivery).toFixed(2)} RSD (Dostava: ${delivery} RSD)`;
              })()}
            </p>
          </div>

          <div className="order-form">
            <h3>Unesite adresu i broj telefona</h3>

            <div className="form-group">
              <label htmlFor="address">Adresa:</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={e => {
                  const value = e.target.value;
                  setAddress(value);
                  setAddressError(
                    value.trim().length < 8 || !/\d/.test(value)
                      ? "Adresa mora imati bar 8 karaktera i sadržati broj."
                      : ""
                  );
                }}
              />
              {addressError && <p className="error-message">{addressError}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Broj telefona:</label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={e => {
                  const value = e.target.value;
                  setPhoneNumber(value);
                  setPhoneError(
                    !/^06\d{7,}$/.test(value)
                      ? "Broj telefona mora počinjati sa 06 i imati najmanje 9 cifara."
                      : ""
                  );
                }}
              />
              {phoneError && <p className="error-message">{phoneError}</p>}
            </div>

            <button
              className="btn-confirm-order"
              onClick={handlePlaceOrder}
              disabled={!!addressError || !!phoneError}
            >
              Potvrdi porudžbinu
            </button>
          </div>
        </>
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

