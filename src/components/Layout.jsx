import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app-root">
      <nav className="site-nav">
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>
      <div className="page-container">
        <Outlet />
      </div>
    </div>
  );
}
