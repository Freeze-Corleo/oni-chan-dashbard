import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/organisms/Footer';
import Navigation from '../components/organisms/Navigation';
import { retrieveCommandsInformations } from '../core-logic/usecases/command/commandUseCase';
import { selectCommandReducer } from '../view-model-generation/generateCommandModel';

const Livreur = () => {
  const [response, setResponse] = useState('');
  const dispatch = useDispatch();
  const commands = useSelector(selectCommandReducer);
  const commandsData: any = commands;

  useEffect(() => {
    dispatch(retrieveCommandsInformations())
  }, [])

  return (
    <>
      <Navigation />

      {commandsData?.commands?.data ? (
        <>
          <div className="col-span-12 bg-white rounded-lg shadow-lg">
            <div className="grid grid-cols-3 gap-4 m-20 p-10">
              
                {console.log(commandsData)}
                {commandsData?.commands?.data?.map(((command: any) => {
                  return <>
                  <p>Prix de la commande : {command.price} € dans la ville de {command.city}</p>
                  <button
                  className="px-4 py-2 bg-black text-white rounded-full"
                >
                  Accepter la commande
                </button>
                <button
                  className="px-4 py-2 bg-black text-white rounded-full"
                >
                  Refuser la commande
                </button>
                </>
                }))}            
            </div>
          </div>
        </>
      ) : (<></>)}


      <Footer />
    </>
  );
};
export default Livreur;
