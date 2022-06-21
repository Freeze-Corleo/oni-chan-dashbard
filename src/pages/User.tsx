import React from 'react';

import Footer from '../components/organisms/Footer';
import Navigation from '../components/organisms/Navigation';

import RegisterForm from '../components/molecules/forms/Register';
import UserProfil from '../components/UserProfil';

const User = () => {
  return (
    <div>
      <Navigation />
      <div className="h-screen">
        <div className='mt-16 mb-20'>
            <UserProfil />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default User;
