import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/organisms/Footer';
import Navigation from '../components/organisms/Navigation';
import { retrieveCommandsInformations } from '../core-logic/usecases/command/commandUseCase';
import { selectCommandReducer } from '../view-model-generation/generateCommandModel';
import io from 'socket.io-client';
import { StringLiteralLike } from 'typescript';

const ENDPOINT = 'http://localhost:6969/';
const socket = io('ws://localhost:6969');

const Livreur = () => {
  const [response, setResponse] = useState('');
  const dispatch = useDispatch();
  const commands = useSelector(selectCommandReducer);
  const [commandId, setCommandId] = useState('');
  const commandsData: any = commands;

  useEffect(() => {
    dispatch(retrieveCommandsInformations());
  }, []);

  useEffect(() => {
    const socket = io('ws://localhost:6969');

    socket.on('FromAPI', (data) => {
      setResponse(data);
    });
  }, [setResponse]);

  const commandAccepted = (_uuid: string) => {
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
              {commandsData?.commands?.data?.map((command: any) => {
                return (
                  <>
                    <p>
                      Prix de la commande : {command.price} € dans la ville de{' '}
                      {command.city}
                    </p>
                    <button
                      onClick={() => {
                        deliveryManAtHome(command.uuid);
                      }}
                      className="px-4 py-2 text-white bg-black rounded-full cursor-pointer"
                    >
                      Accepter la commande
                    </button>
                    <button className="px-4 py-2 text-white bg-black rounded-full cursor-pointer">
                      Refuser la commande
                    </button>
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
