import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import OrderTracking from "./OrderTracking";
import axios from "axios";
import ReviewForm from "./ReviewForm";

function Cart({ items, onAdd, onMin, onPlaceOrder }) {
  const [dishes, setDishes] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantDishes, setRestaurantDishes] = useState([]);
  const [showReviewForm, setShowReviewForm] = useState(false);

  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [cardErrors, setCardErrors] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: ""
  });

  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const [isOrderSuccessful, setIsOrderSuccessful] = useState(false);
  const [addressError, setAddressError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [showOrderTracking, setShowOrderTracking] = useState(false);
  const [currentOrderId, setCurrentOrderId] = useState(null);

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

  const formatCardNumber = (value) => {
    const digits = value.replace(/\D/g, "");
    return digits.match(/.{1,4}/g)?.join(" ") || "";
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  const handlePlaceOrder = async () => {
    if (!address || !phoneNumber) {
      alert("Molimo unesite adresu i broj telefona.");
      return;
    }
    if (addressError || phoneError) {
      alert("Molimo ispravite greške u adresi ili broju telefona.");
      return;
    }

    if (paymentMethod === "card") {
      const newErrors = {
        number: !/^\d{16}$/.test(cardNumber.replace(/\s/g, "")) ? "Broj kartice mora imati tačno 16 cifara." : "",
        name: !/^[A-Za-z\s]{5,}$/.test(cardName) ? "Ime mora sadržati bar 5 slova." : "",
        expiry: !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate) ? "Format mora biti MM/YY." : "",
        cvv: !/^\d{3}$/.test(cvv) ? "CVV mora imati tačno 3 cifre." : "",
      };

      setCardErrors(newErrors);

      const hasErrors = Object.values(newErrors).some(err => err !== "");
      if (hasErrors) {
        alert("Molimo ispravite greške u podacima o kartici.");
        return;
      }
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
      const response = await axios.post(
        "http://localhost:8000/api/orders",
        {
          items: orderItems,
          delivery_address: address,
          phone_number: phoneNumber,
          payment_method: paymentMethod,
        },
        {
          headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem("auth_token")}`,
          },
        }
      );

      setIsOrderSuccessful(true);
      setIsOrderConfirmed(true);
      setCurrentOrderId(response.data.orderId || null);
      setShowOrderTracking(true);
      onPlaceOrder(address, phoneNumber);
    } catch (error) {
      console.error("Greška prilikom slanja porudžbine:", error);
      setIsOrderSuccessful(false);
      setIsOrderConfirmed(true);
      alert("Došlo je do greške prilikom poručivanja. Pokušajte ponovo.");
    }
  };

  const cartItems = items;

  const handleOrderTrackingClose = () => {
    setShowOrderTracking(false);
    setShowReviewForm(true);
  };

  return (
    <div className="menu-container">
      {showOrderTracking ? (
        <OrderTracking onClose={handleOrderTrackingClose} 
        orderId={currentOrderId} />
      ) : showReviewForm ? (
        <ReviewForm
          orderId={currentOrderId}
          onSuccess={(review) => {
            console.log("Review submitted:", review);
            setShowReviewForm(false);
            alert("Hvala na oceni!");
          }}
          onSkip={() => setShowReviewForm(false)}
        />
      ) : (
        <>
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
                <h3>Unesite adresu, broj telefona i način plaćanja</h3>

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

                <div className="form-group">
                  <label htmlFor="paymentMethod">Način plaćanja:</label>
                  <select
                    id="paymentMethod"
                    value={paymentMethod}
                    onChange={e => setPaymentMethod(e.target.value)}
                  >
                    <option value="cash">Pouzećem (keš)</option>
                    <option value="card">Karticom</option>
                  </select>
                </div>

                {paymentMethod === "card" && (
                  <>
                    <div className="form-group">
                      <label htmlFor="cardNumber">Broj kartice:</label>
                      <input
                        type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        maxLength={19}
                        placeholder="1234 5678 9012 3456"
                      />
                      {cardErrors.number && <p className="error-message">{cardErrors.number}</p>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="cardName">Ime i prezime vlasnika kartice:</label>
                      <input
                        type="text"
                        id="cardName"
                        value={cardName}
                        onChange={e => setCardName(e.target.value)}
                      />
                      {cardErrors.name && <p className="error-message">{cardErrors.name}</p>}
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="expiryDate">Datum isteka (MM/YY):</label>
                        <input
                          type="text"
                          id="expiryDate"
                          value={expiryDate}
                          onChange={e => setExpiryDate(e.target.value)}
                          placeholder="MM/YY"
                          maxLength={5}
                        />
                        {cardErrors.expiry && <p className="error-message">{cardErrors.expiry}</p>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="cvv">CVV:</label>
                        <input
                          type="text"
                          id="cvv"
                          value={cvv}
                          onChange={e => setCvv(e.target.value)}
                          maxLength={3}
                          placeholder="123"
                        />
                        {cardErrors.cvv && <p className="error-message">{cardErrors.cvv}</p>}
                      </div>
                    </div>
                  </>
                )}

                <button className="btn-confirm-order" onClick={handlePlaceOrder}>
                  Poruči
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;
