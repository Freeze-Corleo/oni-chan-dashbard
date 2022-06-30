import React from 'react';
import { ICommand } from '../../../appState';

interface ICommandCardProps {
  command: ICommand;
}

const CommandCard: React.FC<ICommandCardProps> = ({ command }) => {
  console.log(command);
  return (
    <div className="p-2">
      <div className="bg-gray-800 shadow-lg rounded-lg px-2 py-4 text-white">
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
      </div>
    </div>
  );
};

export default CommandCard;
