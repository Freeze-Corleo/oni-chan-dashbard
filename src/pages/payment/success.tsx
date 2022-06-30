import React from 'react';

import { useSelector } from 'react-redux';

import { selectBasketReducer } from '../../view-model-generation/generateBasketModel';

import HomeRoot from '../../components/organisms/HomeRoot';

const SuccessPage = () => {
  const basket = useSelector(selectBasketReducer);
  return (
    <HomeRoot>
      <div className="pt-40">
        <h1 className="font-bold text-2xl">
          Commande envoyée au restaurateur avec succès, préparez vous à bien
          manger !
        </h1>
        <div className="relative pt-8">
          <div className="h-4 bg-gray-200 rounded-full"></div>
          <div
            style={{ width: '89%' }}
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
          <div className="space-y-6 pt-8">
            {basket?.products.map((product) => {
              return (
                <div className="flex items-center" key={product.product._id}>
                  <div className="bg-gray-500 w-6 h-6 rounded-full items-center flex justify-center font-normal text-sm text-white">
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
        </div>
      </div>
    </HomeRoot>
  );
};

export default SuccessPage;
