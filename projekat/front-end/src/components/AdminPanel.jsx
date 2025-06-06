import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminPanel({ onLogout }) {
  const [adminData, setAdminData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("auth_token");

    if (!token) {
      setError("Nema tokena – pristup odbijen.");
      return;
    }

    axios.get("/api/admin/data", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      setAdminData(response.data);
    })
    .catch((error) => {
      console.error("Greška prilikom učitavanja admin podataka:", error);
      setError("Nemate pravo pristupa ovoj stranici.");
      navigate("/");
    });
  }, [navigate]);

  if (error) {
    return <div className="admin-panel-error">{error}</div>;
  }

  if (!adminData) {
    return <div>Učitavanje admin panela...</div>;
  }

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <p>{adminData.message}</p>

      <ul>
        {adminData.adminTools?.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>

      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <button onClick={onLogout} className="btn-logout">
          Odjavi se
        </button>
      </div>
    </div>
  );
}

export default AdminPanel;