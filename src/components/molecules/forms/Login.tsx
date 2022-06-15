import React from 'react';

import Label from '../../atoms/Label';
import Input from '../../atoms/Input';
import { IUserLogin } from '../../../appState';

import { AuthenticationGateway } from '../../../secondary-adapters/auth/authGateway';

const LoginForm = () => {
  const [emailLogin, setEmailLogin] = React.useState<boolean>(false);
  const _auth = new AuthenticationGateway();
  const [credentials, setCredentials] = React.useState<IUserLogin>({
    email: '',
    password: '',
  });

  const onDisplayLoginForm = () => {
    setEmailLogin(true);
  };

  const onChangeCredentials = (
    _event: React.ChangeEvent<{ name: string; value: string }>
  ) => {
    setCredentials({
      ...credentials,
      [_event.target.name]: _event.target.value,
    });
  };

  const userConnection = () => {
    _auth.login(credentials);
  };

  return (
    <>
      <h1 className="py-16 flex justify-center font-medium text-3xl">
        Se connecter
      </h1>
      <div className="relative z-50 grid place-content-center space-y-4">
        {!emailLogin && (
          <>
            <button
              type="button"
              className="rounded-full flex items-center bg-blue-700 text-white font-medium tracking-wide px-20 py-2 cursor-pointer space-x-4 hover:bg-blue-900 shadow-md transition duration-300 linear"
            >
              <img
                src={process.env.PUBLIC_URL + '/img/facebook-icon.png'}
                alt="icone de facebook"
                className="w-7"
              />
              <p style={{ fontSize: 16 }}>Se connecter avec Facebook</p>
            </button>
            <a href="http://localhost:8080/oni-chan/auth/google">
              <div className="rounded-full flex items-center bg-white text-black font-medium tracking-wide px-20 py-2 cursor-pointer space-x-4 hover:bg-gray-200 shadow-md transition duration-300 linear border">
                <img
                  src={process.env.PUBLIC_URL + '/img/google-icon.png'}
                  alt="icone de google"
                  className="w-7"
                />
                <p style={{ fontSize: 16 }}>Se connecter avec Google</p>
              </div>
            </a>

            <button
              type="button"
              className="rounded-full flex items-center bg-[#A2F5B5] text-black font-medium tracking-wide px-20 py-2 cursor-pointer space-x-4 hover:bg-[#6bc17f] shadow-md transition duration-300 linear"
              onClick={() => onDisplayLoginForm()}
            >
              <p style={{ fontSize: 16 }}>
                Se connecter avec une adresse e-mail
              </p>
            </button>
            <div className="grid place-content-center pt-8">
              <a href="/register">
                <button
                  type="button"
                  className="rounded-full flex items-center bg-black text-white font-medium tracking-wide px-20 py-2 cursor-pointer space-x-4 hover:bg-gray-800 shadow-md transition duration-300 linear"
                >
                  <p style={{ fontSize: 16 }}>S'inscrire</p>
                </button>
              </a>
            </div>
          </>
        )}
        {emailLogin && (
          <>
            <div className="w-1/2">
              <Label htmlfor="mdp" label="Email" />
              <Input
                type="text"
                nameInput="email"
                placeholder="Entrer votre email"
                onChangeFunction={onChangeCredentials}
              />
            </div>
            <div className="w-1/2">
              <Label htmlfor="cmdp" label="Mot de passe :" />
              <Input
                type="password"
                nameInput="password"
                placeholder="Entrer votre mot de passe"
                onChangeFunction={onChangeCredentials}
              />
            </div>
            <div className="grid place-content-center pt-8">
              <button
                onClick={() => userConnection()}
                type="button"
                className="rounded-full flex items-center bg-black text-white font-medium tracking-wide px-20 py-2 cursor-pointer space-x-4 hover:bg-gray-800 shadow-md transition duration-300 linear"
              >
                <p style={{ fontSize: 16 }}>Se connecter</p>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default LoginForm;
