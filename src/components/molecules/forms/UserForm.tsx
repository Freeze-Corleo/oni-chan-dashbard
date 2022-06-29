import React from 'react';

import Input from '../../atoms/Input';

import { IUser } from '../../../appState';

export interface IPersonnalInfoForm {
  data: IUser;
  user: { data: any };
  onChangeValueUser: (
    _event: React.ChangeEvent<{ name: string; value: string }>
  ) => void;
  onPreviewImage: (event: any) => void;
  onUpdateUserInformations: () => void;
}

const PersonalInfoForm: React.FC<IPersonnalInfoForm> = ({
  data,
  user,
  onChangeValueUser,
  onPreviewImage,
  onUpdateUserInformations,
}) => {
  return (
    <>
      <div className="relative z-50 py-16">
        <div className="">
          <h2 className="font-medium text-xl py-2">
            Informations personnelles
          </h2>
          <h3 className="font-medium tracking-wide text-gray-500 pb-4">
            Modifiez vos informations personnelles ainsi que votre photo de
            profil ici !
          </h3>
          <div className="px-20 py-12 bg-gray-200 rounded-lg">
            <div className="flex space-x-4">
              <div>
                <p className="pl-1 pb-2 text-sm font-medium tracking-wide">
                  Pr&eacute;nom
                </p>
                <Input
                  type="text"
                  nameInput="firstname"
                  placeholder="Votre prénom"
                  value={data?.firstname}
                  onChangeFunction={onChangeValueUser}
                />
              </div>
              <div>
                <p className="pl-1 pb-2 text-sm font-medium tracking-wide">
                  Nom
                </p>
                <Input
                  type="text"
                  nameInput="lastname"
                  placeholder="Votre nom"
                  value={data?.lastname}
                  onChangeFunction={onChangeValueUser}
                />
              </div>
            </div>
            <div className="py-4">
              <p className="pl-1 pb-2 text-sm font-medium tracking-wide">
                E-mail
              </p>
              <Input
                type="text"
                nameInput="email"
                placeholder="Votre e-mail"
                value={data?.email}
                onChangeFunction={onChangeValueUser}
              />
            </div>
            <div className="py-4">
              <p className="pl-1 pb-2 text-sm font-medium tracking-wide">
                T&eacute;l&eacute;phone
              </p>
              <Input
                type="text"
                nameInput="phone"
                placeholder="Votre téléphone"
                value={data?.phone}
                onChangeFunction={onChangeValueUser}
              />
            </div>
            <div className="py-4">
              <p className="pl-1 pb-2 text-sm font-medium tracking-wide">
                Photo
              </p>
              <div className="flex space-x-5 items-center">
                {data.profilUrl.length !== 0 ? (
                  <img
                    src={data.profilUrl}
                    className="object-cover w-20 h-20 rounded-full"
                    alt="profil of a specific user"
                  />
                ) : (
                  <div className="object-cover w-20 h-20 rounded-full bg-black flex items-center justify-center text-white font-medium text-xl">
                    N
                  </div>
                )}
                <label className="text-white shadow-2xl font-medium rounded-full text-sm px-10 py-3 text-center inline-flex items-center bg-black cursor-pointer hover:bg-gray-800 transition duration-300 linear">
                  Changer de photo
                </label>
                <input
                  type="file"
                  className="absolute opacity-0 cursor-pointer"
                  onChange={onPreviewImage}
                />
              </div>
            </div>
          </div>
          <div className="pt-8">
            <button
              onClick={() => onUpdateUserInformations()}
              type="button"
              className="rounded-full flex items-center bg-black text-white font-medium tracking-wide px-20 py-2 cursor-pointer space-x-4 hover:bg-gray-800 shadow-md transition duration-300 linear"
            >
              <p style={{ fontSize: 16 }}>Modifier</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfoForm;
