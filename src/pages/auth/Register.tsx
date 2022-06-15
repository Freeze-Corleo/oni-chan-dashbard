import React from 'react';

import Footer from '../../components/organisms/Footer';
import Navigation from '../../components/organisms/Navigation';

import RegisterForm from '../../components/molecules/forms/Register';
import Button from '../../components/atoms/RegisterButton';

const Register = () => {
  return (
    <div>
      <Navigation />
      <div className="h-screen">
        <RegisterForm />
        <div className='mt-16 mb-20'>
        <Button label="S'inscrire" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
