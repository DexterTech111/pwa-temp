import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Home from './pages/Home';
import Account from './pages/Account';
import LiveChat from './pages/LiveChat';
import Info from './pages/Info';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Login />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Home />} /> {/* Default route for /dashboard */}
          <Route path="home" element={<Home />} />
          <Route path="policies" element={<Home />} />
          <Route path="account" element={<Account />} />
          <Route path="livechat" element={<LiveChat />} />
          <Route path="info" element={<Info />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
