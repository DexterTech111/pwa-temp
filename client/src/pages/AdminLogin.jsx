// src/pages/AdminLogin.js
import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}admin-login`, {
        username,
        password,
      });
      localStorage.setItem('token', res.data.token);
      window.location.href = '/admin-dashboard';
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-primary mb-4">Admin Login</h2>
        <input
          className="border border-primary p-2 w-full mb-4"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border border-primary p-2 w-full mb-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-primary text-white p-2 w-full rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
