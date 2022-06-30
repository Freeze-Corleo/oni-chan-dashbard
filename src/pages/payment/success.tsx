import React from 'react';

import { useSelector } from 'react-redux';
import io from 'socket.io-client';

import { selectBasketReducer } from '../../view-model-generation/generateBasketModel';
import { selectCommandReducer } from '../../view-model-generation/generateCommandModel';
import HomeRoot from '../../components/organisms/HomeRoot';

const socket = io('ws://localhost:6969');

const SuccessPage = () => {
  const basket = useSelector(selectBasketReducer);
  const command = useSelector(selectCommandReducer);
  const [response, setResponse] = React.useState('0');

  React.useEffect(() => {
    socket.on('ClientSocket', (data: string) => {
      if (command) {
        console.log(command);
        if (data.includes(command[0].uuid)) {
          setResponse(data.split(' ')[0]);
        }
      }
    });
  }, [setResponse]);

  const hasFood = () => {
    if (command) {
      socket.emit('CommandSocket', `100% ${command[0].uuid}`);
    }
  };

  return (
    <HomeRoot>
      <div className="relative z-50 pt-40">
        <h1 className="text-2xl font-bold">
          Commande envoyée au restaurateur avec succès, préparez vous à bien
          manger !
        </h1>
        <div className="relative pt-8">
          <div className="h-4 bg-gray-200 rounded-full"></div>
          <div
            style={{ width: response }}
            className="absolute h-4 bg-[#24bf60] rounded-full top-8 transition duration-300"
          ></div>
        </div>
        <div className="pt-4 tracking-wide">
          <span className="font-bold">Statut de la commande</span> : La commande
          est en préparation
        </div>
        <div className="pt-8">
          <h2 className="text-lg font-medium">
            R&eacute;capitulatif de la commande:
          </h2>
          <div className="pt-8 space-y-6">
            {basket?.products.map((product) => {
              return (
                <div className="flex items-center" key={product.product._id}>
                  <div className="flex items-center justify-center w-6 h-6 text-sm font-normal text-white bg-gray-500 rounded-full">
                    {product.qte}
                  </div>
                  <div className="pl-2 font-medium">
                    {product.product.title} ({product.product.price} €)
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pt-4 font-medium">Total : {basket?.totalPrice} €</div>
          <button
            className="px-8 py-4 mt-8 text-white transition duration-300 bg-black rounded-full hover:bg-gray-800"
            onClick={() => {
              hasFood();
            }}
          >
            J'ai bien reçu la nourriture
          </button>
        </div>
      </div>
    </HomeRoot>
  );
};

export default SuccessPage;
