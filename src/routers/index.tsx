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
import RestaurantIdAdmin from '../pages/admin/createRestaurant/restaurant';
import ProductIndex from '../pages/admin/products';
import CreateProductsFromSpecificRestaurant from '../pages/admin/products/create';
import SuccessPage from '../pages/payment/success';

import PaymentHome from '../pages/payment';
import Test from '../pages/Test';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoutes />}>
        <Route
          path="/admin/create-restaurant"
          element={<CreateRestaurantAdmin />}
        />
        <Route path="/admin/restaurant/:id" element={<RestaurantIdAdmin />} />
        <Route path="/admin/create-product" element={<ProductIndex />} />
        <Route
          path="/admin/create-product/:id"
          element={<CreateProductsFromSpecificRestaurant />}
        />
      </Route>
      <Route path="/admin" element={<IndexAdminDashboard />} />

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
      <Route path="/test" element={<Test />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
};

export default AppRoute;
