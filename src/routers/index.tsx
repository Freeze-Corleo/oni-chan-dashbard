import { Routes, Route } from 'react-router-dom';

import ProtectedRoutes from '../components/auth/AdminRoute';
import PublicRoutes from '../components/auth/Public Route';

import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import EmailVerification from '../pages/auth/EmailVerification';
import Home from '../pages/Home';
import Restaurant from '../pages/Restaurant';
import MyProfil from '../pages/my-profil';
import RestaurantFeed from '../pages/Restaurants';

import RegisterRestorer from '../pages/admin/register';

import BackOffice from '../pages/back-office';
import IndexAdminDashboard from '../pages/admin/index';
import CreateRestaurantAdmin from '../pages/admin/createRestaurant';

import PaymentHome from '../pages/payment';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/admin" element={<IndexAdminDashboard />} />
        <Route
          path="/admin/create-restaurant"
          element={<CreateRestaurantAdmin />}
        />
      </Route>
      <Route path="/" element={<PublicRoutes />}></Route>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify-code" element={<EmailVerification />} />
      <Route path="/restaurants" element={<RestaurantFeed />} />
      <Route path="/restaurant/:id" element={<Restaurant />} />
      <Route path="/my-profil" element={<MyProfil />} />
      <Route path="/register-restaurant" element={<RegisterRestorer />} />
      <Route path="/feed" element={<RestaurantFeed />} />
      <Route path="/back-office" element={<BackOffice />} />
      <Route path="/paiement" element={<PaymentHome />} />
    </Routes>
  );
};

export default AppRoute;
