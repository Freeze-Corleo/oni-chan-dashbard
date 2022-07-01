import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';
import { useCookies } from 'react-cookie';

import { selectBasketReducer } from '../../view-model-generation/generateBasketModel';
import { selectCommandReducer } from '../../view-model-generation/generateCommandModel';
import { selectMyProfilReducer } from '../../view-model-generation/generateMyProfilModel';
import { retrieveMyUserFromCookie } from '../../core-logic/usecases/my-profil/myUserUseCase';
import { updateCommand } from '../../core-logic/usecases/command/commandUseCase';
import HomeRoot from '../../components/organisms/HomeRoot';

import { ICommand } from '../../appState';

const socket = io('ws://localhost:6969');

const SuccessPage = () => {
  const cookie: any = useCookies(['FREEZE_JWT']);
  const user = useSelector(selectMyProfilReducer);
  const basket = useSelector(selectBasketReducer);
  const command: ICommand[] = useSelector(selectCommandReducer) as ICommand[];
  const dispatch = useDispatch();
  const [response, setResponse] = React.useState('0');
  const status: { [key: string]: string[] } = {
    '0': [
      'Commande envoyée au restaurateur avec succès, préparez vous à bien manger',
      'La commande a été envoyée au restaurateur',
    ],
    '25%': [
      'Attention, le cuistot se met au travail !',
      'La commande a été acceptée par le restaurateur',
    ],
    '50%': [
      'Un livreur va bientôt récupérer votre commande !',
      'La commande a été accepté par un livreur',
    ],
    '75%': [
      'Votre livreur est devant chez vous ! Il est timide allez le voir',
      ' La commande est devant chez vous',
    ],
    '100%': [
      'Notre équipe vous souhaite bon appétit !',
      'La commande est arrivée dans votre cuisine',
    ],
  };
  React.useEffect(() => {
    dispatch(retrieveMyUserFromCookie(cookie[0].FREEZE_JWT));
  }, []);

  React.useEffect(() => {
    socket.on('ClientSocket', (data: string) => {
      setResponse(data.split(' ')[0]);
      if (command) {
        if (data.split(' ')[1] === command[0].uuid) {
          setResponse(data.split(' ')[0]);
        }
      }
    });
  });

  const hasFood = () => {
    if (command) {
      dispatch(updateCommand(command[0]._id, 'receieved', user.data.uuid));
      socket.emit('CommandSocket', `100% ${command[0].uuid}`);
    }
  };

  console.log(response);

  return (
    <HomeRoot>
      <div className="relative z-50 pt-40">
        <h1 className="text-2xl font-bold">{status[response][0]}</h1>
        <div className="relative pt-8">
          <div className="h-4 bg-gray-200 rounded-full"></div>
          <div
            style={{ width: response }}
            className="absolute h-4 bg-[#24bf60] rounded-full top-8 transition duration-300"
          ></div>
        </div>
        <div className="pt-4 tracking-wide">
          <span className="font-bold">Statut de la commande</span> :{' '}
          {status[response][1]}
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
          {response === '100%' ? (
            <p className="pt-8 text-lg font-medium">Bon appétit ! </p>
          ) : (
            <button
              className="px-8 py-4 mt-8 text-white transition duration-300 bg-black rounded-full hover:bg-gray-800"
              onClick={() => {
                hasFood();
              }}
            >
              J'ai bien reçu la nourriture
            </button>
          )}
        </div>
      </div>
    </HomeRoot>
  );
};

export default SuccessPage;
