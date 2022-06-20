import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const PublicRoutes = (props: any) => {
  const auth = useAuth();

  return auth ? <Navigate to="/admin" /> : <Outlet />;
};

export default PublicRoutes;
