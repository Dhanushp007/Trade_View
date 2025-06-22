import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import StockChart from './components/StockChart';
import HomeMain from './components/HomeMain';

function Screens() {
  return <p>Screens page coming soon!</p>;
}
function Login() {
  return <p>Login page coming soon!</p>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeMain />} />
          <Route path="chart" element={<StockChart />} />
          <Route path="screens" element={<Screens />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
