import React, { useState } from "react";
import axios from "axios";

const AddRestaurant = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    description: "",
    latitude: "",
    longitude: ""
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const token = sessionStorage.getItem("auth_token");

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

      const payload = {
    ...formData,
    latitude: parseFloat(formData.latitude),
    longitude: parseFloat(formData.longitude),
  };

    axios.post("http://127.0.0.1:8000/api/admin/restaurants/create", payload, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => {
        setSuccess("Restoran uspešno dodat.");
        setFormData({
          name: "",
          email: "",
          address: "",
          phone: "",
          description: "",
          latitude: "",
          longitude: ""
        });
      })
      .catch(err => {
        console.error("Greška:", err);
        setError("Došlo je do greške prilikom dodavanja restorana.");
      });
  };

  return (
    <div className="admin-item">
      <h3>Dodaj novi restoran</h3>
      <form onSubmit={handleSubmit} className="form-style">
        {["name", "email", "address", "phone", "description", "latitude", "longitude"].map(field => (
          <div key={field} style={{ marginBottom: "1rem" }}>
            <label htmlFor={field} style={{ display: "block", marginBottom: "0.3rem" }}>
              {field.charAt(0).toUpperCase() + field.slice(1)}:
            </label>
            <input
              type="text"
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc" }}
            />
          </div>
        ))}
        <button type="submit" style={{ padding: "0.75rem 1.5rem", background: "#28a745", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer" }}>
          Dodaj restoran
        </button>
        {success && <p style={{ color: "green", marginTop: "1rem" }}>{success}</p>}
        {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
      </form>
    </div>
  );
};

export default AddRestaurant;
