import React from 'react';
import Button from '../atoms/RegisterButton';

const IntroPage = () => {
  return (
    <>
      <div className="relative w-full h-2/3">
        <div
          className="w-full h-full absolute"
          style={{ top: 0, backgroundColor: '#BBF49B' }}
        >
          <div className="grid grid-cols-2">
            <div>
              <p className="mt-40 ml-10 mb-10 text-5xl text-center font-bold">
                ENVIE D'UN BON REPAS SANS BOUGER DE CHEZ VOUS ?
              </p>
              <Button label="Commandez ici" onClick={() => {}} />
            </div>
            <img
              className="mt-20 ml-40 object-scale-down h-60 w-96"
              src={process.env.PUBLIC_URL + '/img/les-courses.png'}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroPage;
