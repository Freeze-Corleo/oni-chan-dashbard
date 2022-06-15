import React from 'react';
import styles from './Login.module.css';

import Footer from '../../components/organisms/Footer';
import Navigation from '../../components/organisms/Navigation';

import LoginForm from '../../components/molecules/forms/Login';

const Login = () => {
  return (
    <div>
      <Navigation />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
