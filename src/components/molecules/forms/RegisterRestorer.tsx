import React from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/RegisterButton';

import { useDispatch } from 'react-redux';

import { PartnerGateway } from '../../../secondary-adapters/partners/partnerGateway';
import { displayToastNotification } from '../../../core-logic/usecases/notifications/notificationsUseCase';

import { IPartnerRegister } from '../../../appState';

const RegisterRestorerForm = () => {
  const dispatch = useDispatch();
  const [dataRegister, setDataRegister] = React.useState<IPartnerRegister>({
    name: '',
    email: '',
    address: '',
    zipCode: '',
    city: '',
    siren: '',
    activity: '',
    firstname: '',
    lastname: '',
    status: 'pending',
    phone: '',
  });
  const onChangeValueRegister = (
    event: React.ChangeEvent<{ name: string; value: string }>
  ) => {
    setDataRegister({
      ...dataRegister,
      [event.target.name]: event.target.value,
    });
  };

  const onRegisterAccount = async () => {
    const partner = new PartnerGateway();
    const { response, error } = await partner.applyPartnership(dataRegister);
    if (!error) {
      dispatch(
        displayToastNotification({
          text: 'Votre formulaire a bien été pris en compte',
          severityLevel: 'info',
          severityTitle: 'Inscription faite',
        })
      );
    } else {
      dispatch(
        displayToastNotification({
          text: 'Une erreur est survenue',
          severityLevel: 'error',
          severityTitle: 'Inscription non réussie',
        })
      );
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg">
      <h3 className="p-4 text-2xl font-medium">Lancez-vous</h3>
      <div className="p-4">
        <div className="px-24 space-y-4">
          <Input
            type="text"
            nameInput="name"
            placeholder="Le nom de votre établissement"
            onChangeFunction={onChangeValueRegister}
          />
          <Input
            type="text"
            nameInput="siren"
            placeholder="Numéro SIREN"
            onChangeFunction={onChangeValueRegister}
          />
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
          <Input
            type="text"
            nameInput="firstname"
            placeholder="Prénom"
            onChangeFunction={onChangeValueRegister}
          />
          <Input
            type="text"
            nameInput="lastname"
            placeholder="Nom"
            onChangeFunction={onChangeValueRegister}
          />
          <Input
            type="text"
            nameInput="email"
            placeholder="E-mail"
            onChangeFunction={onChangeValueRegister}
          />
          <Input
            type="text"
            nameInput="phone"
            placeholder="Téléphone"
            onChangeFunction={onChangeValueRegister}
          />
          <Input
            type="text"
            nameInput="activity"
            placeholder="Activité"
            onChangeFunction={onChangeValueRegister}
          />
          <div className="mt-16 mb-20">
            <Button
              label="S'inscrire"
              onClick={() => {
                onRegisterAccount();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterRestorerForm;
