import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/organisms/Footer';
import Navigation from '../components/organisms/Navigation';
import { retrieveCommandsInformations } from '../core-logic/usecases/command/commandUseCase';
import { selectCommandReducer } from '../view-model-generation/generateCommandModel';
import { updateCommand } from '../core-logic/usecases/command/commandUseCase';
import { selectMyProfilReducer } from '../view-model-generation/generateMyProfilModel';
import { retrieveMyUserFromCookie } from '../core-logic/usecases/my-profil/myUserUseCase';
import { ICommand } from '../appState';

const socket = io('ws://localhost:6969');

const Livreur = () => {
  const [response, setResponse] = useState('');
  const cookie: any = useCookies(['FREEZE_JWT']);
  const user = useSelector(selectMyProfilReducer);
  const dispatch = useDispatch();
  const commands = useSelector(selectCommandReducer);
  const commandsData: any = commands;

  React.useEffect(() => {
    dispatch(retrieveMyUserFromCookie(cookie[0].FREEZE_JWT));
  }, []);

  useEffect(() => {
    dispatch(retrieveCommandsInformations());
  }, []);

  useEffect(() => {
    const socket = io('ws://localhost:6969');

    socket.on('FromAPI', (data) => {
      setResponse(data);
    });
  }, [setResponse]);

  const commandAccepted = (_uuid: string, id: string) => {
    dispatch(updateCommand(id, 'accepted_delivery_man', user.data.uuid));
    socket.emit('CommandSocket', `50% ${_uuid}`);
  };

  const deliveryManAtHome = (_uuid: string) => {
    socket.emit('CommandSocket', `75% ${_uuid}`);
  };

  return (
    <>
      <Navigation />

      {commandsData?.commands?.data ? (
        <>
          <div className="relative z-50 col-span-12 bg-white rounded-lg shadow-lg">
            <div className="grid grid-cols-3 gap-4 p-10 m-20">
              <div>{response}</div>
              {commandsData?.commands?.data?.map((command: ICommand) => {
                return (
                  <>
                    <p>
                      Prix de la commande : {command.price} € dans la ville de{' '}
                      {command.city}
                    </p>
                    {command.delivery !== '' ? (
                      <div
                        onClick={() => {
                          deliveryManAtHome(command.uuid);
                        }}
                        className="w-full px-8 py-4 text-black font-medium bg-[#24bf60] rounded-full"
                      >
                        Marquer comme d&eacute;livr&eacute;
                      </div>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            commandAccepted(command.uuid, command._id);
                          }}
                          className="px-4 py-2 text-white bg-black rounded-full cursor-pointer"
                        >
                          Accepter la commande
                        </button>
                        <button className="px-4 py-2 text-white bg-black rounded-full cursor-pointer">
                          Refuser la commande
                        </button>
                      </>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      <Footer />
    </>
  );
};
export default Livreur;
