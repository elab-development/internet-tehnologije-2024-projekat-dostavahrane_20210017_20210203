import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const OrdersPerRestaurantChart = () => {
  const [data, setData] = useState([]);
  const token = sessionStorage.getItem("auth_token");

  useEffect(() => {
    if (!token) {
      console.error("Nema tokena, nemoguće učitati podatke");
      return;
    }
    
    axios.get("http://127.0.0.1:8000/api/admin/statistics/orders-per-restaurant", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => {
        console.log("Dobijeni podaci za grafikon:", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error("Greška pri učitavanju statistike:", err);
      });
  }, [token]);

  return (
    <div className="chart-container" style={{ width: "100%", height: 400}}>
      <h3>Broj porudžbina po restoranu</h3>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="restaurant" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="order_count" fill="#8884d8" name="Broj porudžbina" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrdersPerRestaurantChart;

