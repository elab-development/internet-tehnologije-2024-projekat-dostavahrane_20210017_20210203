import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import OrdersPerRestaurant from "./OrdersPerRestaurant";
import PopularDishes from "./PopularDishes";
import RevenueChart from "./RevenueChart";

function AdminPanel({ onLogout }) {
  const [view, setView] = useState("chart"); 
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

      <div className="admin-content" style={{ minHeight: "400px", marginBottom: "2rem" }}>
       {view === "orders" && (
  <div className="admin-table-container">
    <table className="admin-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Korisnik</th>
          <th>Cena</th>
          <th>Adresa</th>
          <th>Telefon</th>
          <th>Plaćanje</th>
          <th>Kreirano</th>
        </tr>
      </thead>
      <tbody>
        {data.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.user?.username} ({order.user?.email})</td>
            <td>{order.total_price} RSD</td>
            <td>{order.delivery_address}</td>
            <td>{order.phone_number}</td>
            <td>{order.payment_method}</td>
            <td>{new Date(order.created_at).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
{view === "users" && (
  <div className="admin-table-container">
    <table className="admin-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Korisničko ime</th>
          <th>Email</th>
          <th>Email verifikovan</th>
          <th>Registrovan</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.email_verified_at ? "Da" : "Ne"}</td>
            <td>{new Date(user.created_at).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
       {view === "reviews" && (
  <div className="admin-table-container">
    <table className="admin-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Korisnik</th>
          <th>Ocena hrane</th>
          <th>Ocena dostave</th>
          <th>Komentar</th>
          <th>Kreirano</th>
        </tr>
      </thead>
      <tbody>
        {data.map((review) => (
          <tr key={review.id}>
            <td>{review.id}</td>
            <td>{review.order?.user?.username} ({review.order?.user?.email})</td>
            <td>{review.food_rating}/5</td>
            <td>{review.delivery_rating}/5</td>
            <td>{review.note}</td>
            <td>{new Date(review.created_at).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

        {view === "chart" &&  <OrdersPerRestaurant />}

        {view === "popularDishes" && <PopularDishes />}

        {view === "revenue" && <RevenueChart />}

      </div>

      <div className="admin-button-groups">
  <div className="stat-buttons">
    <p className="button-group-title">📊 Statistika:</p>
    <div className="button-row">
      <button onClick={() => setView("chart")}>Porudžbine po restoranu</button>
      <button onClick={() => setView("popularDishes")}>Najpopularnija jela</button>
      <button onClick={() => setView("revenue")}>Prihodi</button>
    </div>
  </div>

  <div className="data-buttons">
    <p className="button-group-title">📁 Podaci:</p>
    <div className="button-row">
      <button onClick={() => fetchData("/api/admin/orders", "orders")}>Sve narudžbine</button>
      <button onClick={() => fetchData("/api/admin/users", "users")}>Svi korisnici</button>
      <button onClick={() => fetchData("/api/admin/reviews", "reviews")}>Sve recenzije</button>
    </div>
  </div>
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

