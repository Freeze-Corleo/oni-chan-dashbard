import React from 'react';

import { IUser } from '../../../appState';

export interface IAddressInfoForm {
  data: IUser;
  onDeleteAddress: (_uuid: string) => void;
}

const AddressForm: React.FC<IAddressInfoForm> = ({ data, onDeleteAddress }) => {
  return (
    <div className="">
      <h2 className="font-medium text-xl py-2">Adresses</h2>
      <h3 className="font-medium tracking-wide text-gray-500 pb-4">
        Voici la liste des addresses que vous avez utilis&eacute;
      </h3>
      <div className="py-12 bg-gray-200 rounded-lg">
        {data.address ? (
          data?.address?.map((addr) => {
            return (
              <div className="border-t border-b border-solid border-gray-400 cursor-pointer">
                <div className="px-12 py-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium tracking-wide">
                      {addr.number} {addr.street}
                    </h3>
                    <p className="font-medium tracking-wide opacity-70 text-sm">
                      {addr.city} {addr.zipCode}
                    </p>
                  </div>
                  <span
                    className="font-medium transition duration-300 linear hover:text-[#70a97d]"
                    onClick={() => onDeleteAddress(addr.uuid ?? 'no_id')}
                  >
                    Supprimer
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <div className="px-4 font-medium">
            Vous n'avez pas d'adresses enregistr&eacute;e
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressForm;
