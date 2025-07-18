import React, { useEffect, useState } from "react";
import axios from "axios";

const DeleteCategory = () => {
  const [categories, setCategories] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [message, setMessage] = useState("");

  const token = sessionStorage.getItem("auth_token");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/admin/categories", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Greška pri dohvatanju kategorija:", err));
  }, [token]);

  const handleDelete = () => {
    if (!selectedId) return;

    axios
      .delete(`http://127.0.0.1:8000/api/admin/categories/${selectedId}/delete`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setMessage("Kategorija uspešno obrisana.");
        setCategories(categories.filter((cat) => cat.id !== selectedId));
        setSelectedId(null);
      })
      .catch((err) => {
        console.error("Greška pri brisanju:", err);
        setMessage("Došlo je do greške prilikom brisanja.");
      });
  };

  return (
    <div className="admin-form">
      <h3>Obriši kategoriju</h3>
      <select
        value={selectedId || ""}
        onChange={(e) => setSelectedId(e.target.value)}
      >
        <option value="">-- Izaberi kategoriju --</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
      <button onClick={handleDelete} disabled={!selectedId}>
        Obriši
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteCategory;
