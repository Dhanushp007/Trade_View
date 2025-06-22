import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', price: 120 },
  { name: 'Tue', price: 132 },
  { name: 'Wed', price: 101 },
  { name: 'Thu', price: 134 },
  { name: 'Fri', price: 90 },
];

export default function StockChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#1976d2" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
