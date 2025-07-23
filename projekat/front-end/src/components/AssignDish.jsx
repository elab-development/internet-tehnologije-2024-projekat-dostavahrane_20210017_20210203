import React, { useState, useEffect } from "react";
import axios from "axios";

const AssignDish = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [price, setPrice] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState("");
  const [selectedDish, setSelectedDish] = useState("");
  const [message, setMessage] = useState("");
  const token = sessionStorage.getItem("auth_token");

  useEffect(() => {
    axios.get("/api/restaurants").then(res => setRestaurants(res.data));
    axios.get("/api/dishes").then(res => setDishes(res.data));
  }, []);

  const handleAssign = (e) => {
    e.preventDefault();
    setMessage("");

    axios.post("/api/admin/restaurant-dishes/assign", {
  dish_id: selectedDish,
  restaurant_id: selectedRestaurant,
  price: price
}, {
  headers: { Authorization: `Bearer ${token}` }
}).then(res => {
      setMessage(res.data.message);
      setSelectedDish("");
      setSelectedRestaurant("");
    }).catch(err => {
      if (err.response?.status === 409) {
        setMessage("Jelo je već dodeljeno restoranu.");
      } else {
        setMessage("Greška prilikom dodele jela.");
      }
    });
  };

  return (
    <div className="admin-item">
      <h3>Dodeli jelo restoranu</h3>
      <form onSubmit={handleAssign} className="form-style">
        <div style={{ marginBottom: "1rem" }}>
          <label>Izaberi restoran:</label>
          <select value={selectedRestaurant} onChange={e => setSelectedRestaurant(e.target.value)} required>
            <option value="">-- Izaberi --</option>
            {restaurants.map(r => (
              <option key={r.id} value={r.id}>{r.name}</option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Izaberi jelo:</label>
          <select value={selectedDish} onChange={e => setSelectedDish(e.target.value)} required>
            <option value="">-- Izaberi --</option>
            {dishes.map(d => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
          <div style={{ marginBottom: "1rem" }}>
  <label>Cena jela:</label>
  <input
    type="number"
    step="0.01"
    value={price}
    onChange={(e) => setPrice(e.target.value)}
    required
  />
</div>
        </div>
        <button type="submit" style={{ padding: "0.75rem 1.5rem", background: "#28a745", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer" }}>
          Dodaj jelo u restoran
        </button>
        {message && <p style={{ marginTop: "1rem" }}>{message}</p>}
      </form>
    </div>
  );
};

export default AssignDish;
