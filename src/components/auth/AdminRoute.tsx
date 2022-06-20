import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const ProtectedRoutes = (props: any) => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/home" />;
};

export default ProtectedRoutes;
