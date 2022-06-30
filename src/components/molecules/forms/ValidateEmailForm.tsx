import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AuthenticationGateway } from '../../../secondary-adapters/auth/authGateway';

import { displayToastNotification } from '../../../core-logic/usecases/notifications/notificationsUseCase';

const ValidateEmailForm = ({
  email,
  uuid,
}: {
  email: string | null;
  uuid: string | null;
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [code, setCode] = React.useState<string>('');

  const onSubmitAndVerify = async () => {
    const auth = new AuthenticationGateway();
    if (uuid) {
      const { error } = await auth.validateCode(uuid, code);
      console.log(error);
      if (!error) {
        console.log('uiii je suis meilleur');
        dispatch(
          displayToastNotification({
            text: 'Votre code de validation est bon',
            severityLevel: 'success',
            severityTitle: 'Code validé',
          })
        );
        setTimeout(() => navigate({ pathname: '/home' }), 2000);
      } else {
        dispatch(
          displayToastNotification({
            text: 'Votre code de validation est incorrect',
            severityLevel: 'error',
            severityTitle: 'Code erroné',
          })
        );
      }
    }
  };

  const onChangeCode = (
    event: React.ChangeEvent<{ name: string; value: string }>
  ) => {
    setCode(code + event.target.value);
  };

  return (
    <div className="grid place-items-center">
      <div className="rounded-full bg-white p-2 w-[44px] h-[44px] flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          viewBox="0 0 24 24"
          width="32px"
          fill="#A2F5B5"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z" />
        </svg>
      </div>
      <h1 className="pt-4 font-medium">V&eacute;rifiez votre code</h1>
      <h2 className="pt-4 font-medium">
        Entrez le code de v&eacute;rification envoy&eacute; &agrave; {email}
      </h2>

      <div className="pt-8 space-x-4">
        <input
          className="outline-none w-[50px] h-[50px] rounded-md p-5 font-medium"
          maxLength={1}
          onChange={onChangeCode}
          name="codeOne"
          type="text"
        />
        <input
          className="outline-none w-[50px] h-[50px] rounded-md p-5 font-medium"
          maxLength={1}
          onChange={onChangeCode}
          name="codeTwo"
          type="text"
        />
        <input
          className="outline-none w-[50px] h-[50px] rounded-md p-5 font-medium"
          maxLength={1}
          onChange={onChangeCode}
          name="codeThree"
          type="text"
        />
        <input
          className="outline-none w-[50px] h-[50px] rounded-md p-5 font-medium"
          maxLength={1}
          onChange={onChangeCode}
          name="codeFour"
          type="text"
        />
      </div>

      <button
        onClick={() => {
          onSubmitAndVerify();
        }}
        className="px-4 py-2 mt-8 font-medium transition duration-300 bg-white rounded-full hover:bg-gray-200 linear"
      >
        Valider
      </button>
    </div>
  );
};

export default ValidateEmailForm;
