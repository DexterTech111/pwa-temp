import React from 'react';
import { NavLink, Outlet  } from 'react-router-dom';
import { FaHome, FaFileAlt, FaUser, FaComments, FaInfoCircle } from 'react-icons/fa';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
      <Outlet /> {/* This is where child routes will be rendered */}
      </main>
      <nav className="bg-primary p-4 fixed bottom-0 left-0 right-0 flex justify-around text-white z-30">
        <NavLink to="/dashboard/home" className={({ isActive }) => (isActive ? "text-yellow-500 flex justify-center items-center flex-col" : "flex justify-center items-center flex-col")}>
          <FaHome size={19} />
          <p>Home</p>
        </NavLink>
        <NavLink to="/dashboard/policies" className={({ isActive }) => (isActive ? "text-yellow-500 flex justify-center items-center flex-col" : "flex justify-center items-center flex-col")}>
          <FaFileAlt size={19} />
          <p>Policies</p>
        </NavLink>
        <NavLink to="/dashboard/account" className={({ isActive }) => (isActive ? "text-yellow-500 flex justify-center items-center flex-col" : "flex justify-center items-center flex-col")}>
          <FaUser size={19} />
          <p>Account</p>
        </NavLink>
        <NavLink to="/dashboard/livechat" className={({ isActive }) => (isActive ? "text-yellow-500 flex justify-center items-center flex-col" : "flex justify-center items-center flex-col")}>
          <FaComments size={19} />
          <p>Live Chat</p>
        </NavLink>
        <NavLink to="/dashboard/info" className={({ isActive }) => (isActive ? "text-yellow-500 flex justify-center items-center flex-col" : "flex justify-center items-center flex-col")}>
          <FaInfoCircle size={19} />
          <p>Info</p>
        </NavLink>
      </nav>
    </div>
  );
};

export default Layout;
