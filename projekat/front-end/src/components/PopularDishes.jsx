import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const PopularDishesChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("auth_token");
    axios.get("http://localhost:8000/api/admin/statistics/popular-dishes", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setData(res.data))
      .catch(err => console.error("Greška pri učitavanju najpopularnijih jela:", err));
  }, []);

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h3>Najpopularnija jela</h3>
      <ResponsiveContainer>
        <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 100, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            domain={[0, 'dataMax + 2']}
            tickFormatter={(tick) => Math.round(tick)}
            tick={{ fontSize: 14 }}
            label={{ value: "Količina porudžbina", position: "insideBottom", offset: -5 }}
        />
          <YAxis dataKey="dish_name" type="category" />
          <Tooltip />
          <Bar dataKey="quantity" fill="#82ca9d" name="Poručena količina" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PopularDishesChart;
