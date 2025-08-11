import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // If not logged in, redirect to login
    if (!token) {
      navigate("/login");
      return;
    }

    // Fetch user profile
    axios
      .get("http://127.0.0.1:8000/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch profile. Please log in again.");
      });
  }, [navigate]);

  if (error) {
    return (
      <div className="form-box">
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="form-box">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="form-box">
      <h2>Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}
