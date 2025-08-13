import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app-root">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg px-8 py-4 flex justify-between items-center">
  {/* Brand / Logo */}
  <div className="text-2xl font-extrabold text-white tracking-wide">
    Registration System
  </div>
  
  {/* Links */}
  <div className="flex space-x-4">
    <Link 
      to="/login" 
      className="px-4 py-2 bg-white text-indigo-600 rounded-full font-medium shadow hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
    >
      Login
    </Link>
    <Link 
      to="/register" 
      className="px-4 py-2 bg-white text-purple-600 rounded-full font-medium shadow hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
    >
      Register
    </Link>
    <Link 
      to="/profile" 
      className="px-4 py-2 bg-white text-pink-600 rounded-full font-medium shadow hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
    >
      Profile
    </Link>
  </div>
</nav>



   

      {/* Routes */}
      
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
       {/* Footer */}
       <Footer />
    
    </div>
  );
}
