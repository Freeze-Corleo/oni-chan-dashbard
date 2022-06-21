import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ProtectedRoutes from '../components/auth/AdminRoute';
import PublicRoutes from '../components/auth/Public Route';

import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import EmailVerification from '../pages/auth/EmailVerification';
import App from '../App';
import Home from '../pages/Home';
import Restaurant from '../pages/Restaurant';

import IndexAdminDashboard from '../pages/admin/index';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoutes />}></Route>
      <Route path="/" element={<PublicRoutes />}></Route>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify-code" element={<EmailVerification />} />
      <Route path="/restaurant" element={<Restaurant />} />
      <Route path="/admin" element={<IndexAdminDashboard />} />
    </Routes>
  );
};

export default AppRoute;
