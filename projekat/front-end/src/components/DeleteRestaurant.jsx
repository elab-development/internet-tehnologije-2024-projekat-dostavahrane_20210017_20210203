import React, { useEffect, useState } from "react";
import axios from "axios";

const DeleteRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [message, setMessage] = useState("");

  const token = sessionStorage.getItem("auth_token");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/admin/restaurants", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setRestaurants(res.data))
      .catch((err) =>
        console.error("Greška pri dohvatanju restorana:", err)
      );
  }, [token]);

  const handleDelete = () => {
    if (!selectedId) return;

    axios
      .delete(`http://127.0.0.1:8000/api/admin/restaurants/${selectedId}/delete`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setMessage("Restoran uspešno obrisan.");
        setRestaurants(restaurants.filter((r) => r.id !== parseInt(selectedId)));
        setSelectedId(null);
      })
      .catch((err) => {
        console.error("Greška pri brisanju restorana:", err);
        setMessage("Došlo je do greške prilikom brisanja.");
      });
  };

  return (
    <div className="admin-form">
      <h3>Obriši restoran</h3>
      <select
        value={selectedId || ""}
        onChange={(e) => setSelectedId(e.target.value)}
      >
        <option value="">-- Izaberi restoran --</option>
        {restaurants.map((r) => (
          <option key={r.id} value={r.id}>
            {r.name}
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

export default DeleteRestaurant;
