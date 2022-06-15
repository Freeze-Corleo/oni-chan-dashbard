import React from 'react';
import Button from '../components/atoms/RegisterButton';
import Footer from '../components/organisms/Footer';
import Navigation from '../components/organisms/Navigation';

const Home = () => {
  return (
    <div>
      <div className="h-screen">
        <Navigation />
        <div
          className="w-full h-2/3 absolute"
          style={{ top: 0, backgroundColor: '#BBF49B' }}
        >
          <div className="grid grid-cols-2">
            <p className="mt-60 ml-40 text-5xl text-center font-bold">
              ENVIE D'UN BON REPAS SANS BOUGER DE CHEZ VOUS ?
            </p>
            <img
              className="mt-36 ml-40 object-scale-down h-60 w-96"
              src={process.env.PUBLIC_URL + '/img/les-courses.png'}
            />
            <Button label="Commandez ici" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
