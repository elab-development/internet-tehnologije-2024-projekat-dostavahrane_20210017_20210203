import React, { useState } from "react";
import axios from "axios";

const AddCategory = () => {
  const [formData, setFormData] = useState({
    name: "",
    picture: null,
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const token = sessionStorage.getItem("auth_token");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    const data = new FormData();

    for (const key in formData) {
      data.append(key, formData[key]);
    }

    axios
      .post("http://127.0.0.1:8000/api/admin/categories/create", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        setSuccess("Kategorija uspešno dodata.");
        setFormData({ name: "", picture: null });
      })
      .catch((err) => {
        console.error("Greška:", err);
        setError("Greška prilikom dodavanja kategorije.");
      });
  };

  return (
    <div className="admin-item">
      <h3>Dodaj novu kategoriju</h3>
      <form onSubmit={handleSubmit} className="form-style">
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name">Naziv kategorije:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="picture">Slika kategorije:</label>
          <input
            type="file"
            id="picture"
            name="picture"
            accept="image/*"
            onChange={handleChange}
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
