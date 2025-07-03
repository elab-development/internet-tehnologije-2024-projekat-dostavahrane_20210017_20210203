import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const RevenueChart = () => {
  const [daily, setDaily] = useState([]);
  const [perRestaurant, setPerRestaurant] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const token = sessionStorage.getItem("auth_token");
    axios.get("http://localhost:8000/api/admin/statistics/revenue", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        setDaily(res.data.daily.reverse());
        setPerRestaurant(res.data.per_restaurant);
        setTotal(res.data.total);
      })
      .catch(err => console.error("Greška pri učitavanju prihoda:", err));
  }, []);

  return (
    <div style={{ width: "100%", marginBottom: "2rem" }}>
      <h3>Prihodi po danima (poslednjih 30 dana)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={daily} margin={{ top: 20, right: 30, left: 50, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#ff7300" name="Prihod (RSD)" />
        </LineChart>
      </ResponsiveContainer>

      <h4 style={{ marginTop: "1.5rem" }}>Ukupan prihod: <strong>{total.toLocaleString()} RSD</strong></h4>

      <div style={{ marginTop: "1rem" }}>
        <h4>Prihodi po restoranima:</h4>
        <ul>
          {perRestaurant.map((r, i) => (
            <li key={i}>{r.restaurant}: <strong>{parseFloat(r.revenue).toLocaleString()} RSD</strong></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RevenueChart;
