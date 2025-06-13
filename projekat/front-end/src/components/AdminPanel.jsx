import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminPanel({ onLogout }) {
  const [view, setView] = useState(null);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const token = sessionStorage.getItem("auth_token");

  useEffect(() => {
    if (!token) {
      setError("Nema tokena – pristup odbijen.");
      return;
    }


    axios.get("/api/admin/data", {
      headers: { Authorization: `Bearer ${token}` }
    }).catch((error) => {
      console.error("Greška prilikom učitavanja admin podataka:", error);
      setError("Nemate pravo pristupa ovoj stranici.");
      navigate("/");
    });
  }, [navigate, token]);

  const fetchData = (endpoint, selectedView) => {
    setView(selectedView);
    setData([]);
    axios.get(endpoint, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => {
        setData(res.data[selectedView]);
      })
      .catch((err) => {
        console.error(`Greška prilikom dohvata ${selectedView}:`, err);
      });
  };

  if (error) {
    return <div className="admin-panel-error">{error}</div>;
  }

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>

      <div className="admin-options">
        <button onClick={() => fetchData("/api/admin/orders", "orders")}>Prikaži sve narudžbine</button>
        <button onClick={() => fetchData("/api/admin/users", "users")}>Prikaži sve korisnike</button>
        <button onClick={() => fetchData("/api/admin/reviews", "reviews")}>Prikaži sve recenzije</button>
      </div>

      <div className="admin-content">
  {view === "orders" && data.map((order, i) => (
    <div key={i} className="admin-item">
      <p><strong>ID:</strong> {order.id}</p>
      <p><strong>Korisnik:</strong> {order.user?.username} ({order.user?.email})</p>
      <p><strong>Cena:</strong> {order.total_price} RSD</p>
      <p><strong>Adresa:</strong> {order.delivery_address}</p>
      <p><strong>Telefon:</strong> {order.phone_number}</p>
      <p><strong>Način plaćanja:</strong> {order.payment_method}</p>
      <p><strong>Kreirano:</strong> {new Date(order.created_at).toLocaleString()}</p>
      <hr />
    </div>
  ))}

  {view === "users" && data.map((user, i) => (
    <div key={i} className="admin-item">
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Ime:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Email verifikovan:</strong> {user.email_verified_at ? "Da" : "Ne"}</p>
      <p><strong>Registrovan:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
      <hr />
    </div>
  ))}

  {view === "reviews" && data.map((review, i) => (
    <div key={i} className="admin-item">
      <p><strong>ID:</strong> {review.id}</p>
      <p><strong>Korisnik:</strong> {review.order?.user?.username} ({review.order?.user?.email})</p>
      <p><strong>Ocena hrane:</strong> {review.food_rating}/5</p>
      <p><strong>Ocena dostave:</strong> {review.delivery_rating}/5</p>
      <p><strong>Komentar:</strong> {review.note}</p>
      <p><strong>Kreirano:</strong> {new Date(review.created_at).toLocaleString()}</p>
      <hr />
    </div>
  ))}
</div>

      <div style={{ marginTop: "1rem", marginBottom: "1rem", textAlign: "center" }}>
        <button onClick={onLogout} className="btn-logout">
          Odjavi se
        </button>
      </div>
    </div>
  );
}

export default AdminPanel;
