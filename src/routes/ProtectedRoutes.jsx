import React from 'react';
import PrivateRoute from './privateRoutes';
import PrivateLayout from '../layouts/PrivateLayout';

// Import your existing profile component
import Profile from '../pages/Profile';

const ProtectedRoutes = () => {
  return (
    <PrivateRoute>
      <PrivateLayout>
        <Profile />
      </PrivateLayout>
    </PrivateRoute>
  );
};

export default ProtectedRoutes;