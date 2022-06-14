import React from 'react';

import Footer from '../../components/organisms/Footer';
import Navigation from '../../components/organisms/Navigation';

import RegisterForm from '../../components/molecules/forms/Register';

const Register = () => {
  return (
    <div>
      <Navigation />
      <div className="h-screen">
        <RegisterForm />
      </div>
      <Footer />
    </div>
  );
};

export default Register;
