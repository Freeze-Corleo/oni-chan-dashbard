import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import ProtectedRoutes from '../components/auth/AdminRoute';
import PublicRoutes from '../components/auth/Public Route';

import { Login } from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import App from '../App';
import { LoginEmail } from '../pages/auth/LoginEmail';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoutes />}></Route>
      <Route path="/" element={<PublicRoutes />}></Route>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/loginEmail' element={<LoginEmail />} />
    </Routes>
  );
};

export default AppRoute;
