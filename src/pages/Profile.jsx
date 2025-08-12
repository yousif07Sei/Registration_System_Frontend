import React from 'react';
import { useProfile } from '../hooks/useProfile';

export default function Profile() {
  const { user, error, loading, logout } = useProfile();

  if (loading) {
    return <div className="form-box">Loading profile...</div>;
  }

  if (error) {
    return <div className="form-box">{error}</div>;
  }

  if (!user) {
    return <div className="form-box">No user data available</div>;
  }

  return (
    <div className="form-box">
      <h2>Profile</h2>
      <div style={{ margin: '20px 0' }}>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <button
        onClick={logout}
        style={{
          padding: '8px 16px',
          background: '#ff4444',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
    </div>
  );
}
