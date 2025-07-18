import React, { useState } from "react";
import axios from "axios";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const token = sessionStorage.getItem("auth_token");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    axios.post("http://127.0.0.1:8000/api/admin/categories/create", { name }, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => {
        setSuccess("Kategorija uspešno dodata.");
        setName("");
      })
      .catch((err) => {
        console.error("Greška pri dodavanju kategorije:", err);
        setError("Greška prilikom dodavanja kategorije.");
      });
  };

  return (
    <div className="admin-item">
      <h3>Dodaj novu kategoriju</h3>
      <form onSubmit={handleSubmit} className="form-style">
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: "0.3rem" }}>
            Naziv kategorije:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc" }}
          />
        </div>
        <button type="submit" style={{ padding: "0.75rem 1.5rem", background: "#28a745", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer" }}>
          Dodaj kategoriju
        </button>
        {success && <p style={{ color: "green", marginTop: "1rem" }}>{success}</p>}
        {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
      </form>
    </div>
  );
};

export default AddCategory;
