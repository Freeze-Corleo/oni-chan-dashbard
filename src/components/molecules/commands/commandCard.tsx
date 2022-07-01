import React from 'react';
import { ICommand } from '../../../appState';
import io from 'socket.io-client';

import { useDispatch } from 'react-redux';
import { updateCommand } from '../../../core-logic/usecases/command/commandUseCase';

const socket = io('ws://https://test-bigmom-api.herokuapp.com:6969');
interface ICommandCardProps {
  command: ICommand;
  userId: string;
}

const CommandCard: React.FC<ICommandCardProps> = ({ command, userId }) => {
  const dispatch = useDispatch();

  const commandAccepted = () => {
    socket.emit('CommandSocket', `25% ${command.uuid}`);
    dispatch(updateCommand(command._id, 'accepted_restaurant', ''));
  };

  return (
    <div className="p-2">
      <div className="px-2 py-4 text-black transition duration-300 bg-gray-100 rounded-lg shadow-xl cursor-pointer hover:bg-gray-200">
        <h2 className="font-medium">Commande numéro : {command.uuid}</h2>
        <p>
          commande passé par {command.firstname} {command.lastname}
        </p>
        <div className="pt-4">
          <div>{command.address}</div>
          <div>
            {command.city} {command.zipCode}
          </div>
        </div>
        <div className="py-4">
          <p className="font-medium">Informations personnelles du client:</p>
          <div>T&eacute;l&eacute;phone: {command.phone}</div>
          <div>E-mail: {command.email}</div>
        </div>
        <div>
          {command.isAccepted ? (
            <div className="w-full px-8 py-4 text-black font-medium bg-[#24bf60] rounded-full">
              Commande acceptée !
            </div>
          ) : (
            <button
              className="w-full px-8 py-4 text-white bg-black rounded-full hover:bg-gray-500"
              onClick={() => {
                commandAccepted();
              }}
            >
              Accepter
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommandCard;
