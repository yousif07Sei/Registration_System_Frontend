import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <div className="app-root">
    <nav className="site-nav">
      <Link to="/login">Login</Link> | <Link to="/register">Register</Link>  <Link to="/profile">Profile</Link>
    </nav>

    <main className="main">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </main>
  </div>
  );
}
