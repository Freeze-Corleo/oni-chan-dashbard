import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Input from '../../atoms/Input';
import Label from '../../atoms/Label';
import Button from '../../atoms/RegisterButton';

import { AuthenticationGateway } from '../../../secondary-adapters/auth/authGateway';
import { displayToastNotification } from '../../../core-logic/usecases/notifications/notificationsUseCase';

import { validateEmail } from '../../../helpers/email-check';

import { IUserRegister } from '../../../appState';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _auth = new AuthenticationGateway();
  const [dataRegister, setDataRegister] = React.useState<
    IUserRegister & { confirmPassword: string }
  >({
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
    zipCode: '',
    city: '',
    browser: '',
    status: 'client',
    phone: '',
  });

  const onRegisterAccount = async () => {
    if (dataRegister.password !== dataRegister.confirmPassword) {
      dispatch(
        displayToastNotification({
          text: 'Vos mots de passe ne correspondent pas',
          severityLevel: 'error',
          severityTitle: 'Mots de passe incorrect',
        })
      );
    }

    if (!validateEmail(dataRegister.email)) {
      dispatch(
        displayToastNotification({
          text: 'Votre adresse e-mail est inccorect',
          severityLevel: 'error',
          severityTitle: 'E-mail incorrect',
        })
      );
    }

    const { response, error } = await _auth.register(dataRegister);
    if (!error) {
      dispatch(
        displayToastNotification({
          text: 'Votre inscription est un succès',
          severityLevel: 'success',
          severityTitle: 'Inscription réussie',
        })
      );
      setTimeout(
        () =>
          navigate({
            pathname: '/verify-code',
            search: `?uuid=${response.data.payload.uuid}&email=${dataRegister.email}`,
          }),
        2000
      );
    } else {
      dispatch(
        displayToastNotification({
          text: 'Désolé une erreur est survenue',
          severityLevel: 'error',
          severityTitle: "Erreur d'inscription",
        })
      );
    }
  };

  const onChangeValueRegister = (
    event: React.ChangeEvent<{ name: string; value: string }>
  ) => {
    setDataRegister({
      ...dataRegister,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="grid place-content-center relative z-50">
      <h1 className="py-16 flex justify-center font-medium text-3xl">
        S'inscrire
      </h1>
      <div className="space-y-6 grid justify-items-start">
        <div className="w-2/3">
          <Label htmlfor="email" label="Email :" />
          <Input
            type="text"
            nameInput="email"
            placeholder="Entrer votre email"
            onChangeFunction={onChangeValueRegister}
          />
        </div>
        <div className="w-1/2">
          <Label htmlfor="mdp" label="Mot de passe :" />
          <Input
            type="password"
            nameInput="password"
            placeholder="Entrer votre mot de passe"
            onChangeFunction={onChangeValueRegister}
          />
        </div>
        <div className="w-1/2">
          <Label htmlfor="cmdp" label="Confirmation du mot de passe :" />
          <Input
            type="password"
            nameInput="confirmPassword"
            placeholder="Confirmer votre mot de passe"
            onChangeFunction={onChangeValueRegister}
          />
        </div>
        <div className="w-1/3">
          <Label htmlfor="tel" label="Téléphone :" />
          <Input
            type="text"
            nameInput="phone"
            placeholder="Entrer votre téléphone"
            onChangeFunction={onChangeValueRegister}
          />
        </div>
        <div className="w-1/3">
          <Label htmlfor="adresse" label="Adresse :" />
          <div className="space-y-4">
            <Input
              type="text"
              nameInput="address"
              placeholder="Adresse rue"
              onChangeFunction={onChangeValueRegister}
            />
            <Input
              type="text"
              nameInput="city"
              placeholder="Ville"
              onChangeFunction={onChangeValueRegister}
            />
            <Input
              type="text"
              nameInput="zipCode"
              placeholder="Code Postal"
              onChangeFunction={onChangeValueRegister}
            />
          </div>
        </div>
      </div>
      <div className="mt-16 mb-20">
        <Button
          label="S'inscrire"
          onClick={() => {
            onRegisterAccount();
          }}
        />
      </div>
    </div>
  );
};

export default RegisterForm;
