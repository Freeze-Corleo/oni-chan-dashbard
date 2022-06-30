import React from 'react';
import { ICommand } from '../../../appState';
import io from 'socket.io-client';

const socket = io('ws://localhost:6969');
interface ICommandCardProps {
  command: ICommand;
}

const CommandCard: React.FC<ICommandCardProps> = ({ command }) => {
  React.useEffect(() => {
    socket.on('CommandSocket', (data) => {
      console.log(data);
    });

    socket.emit('CommandSocket', 'yo mec');
  }, []);

  const commandAccepted = () => {
    socket.emit('CommandSocket', `25% ${command.uuid}`);
  };

  return (
    <div className="p-2">
      <div className="px-2 py-4 text-white bg-gray-800 rounded-lg shadow-lg">
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
          <p>Informations personnelles du client:</p>
          <div>T&eacute;l&eacute;phone: {command.phone}</div>
          <div>E-mail: {command.email}</div>
        </div>
        <div
          className=""
          onClick={() => {
            commandAccepted();
          }}
        >
          Accepter
        </div>
      </div>
    </div>
  );
};

export default CommandCard;
