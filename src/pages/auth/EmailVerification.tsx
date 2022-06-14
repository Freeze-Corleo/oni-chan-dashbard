import React from 'react';
import { useQuery } from '../../hooks/useQuery';

import ValidateEmailForm from '../../components/molecules/forms/ValidateEmailForm';

const EmailVerification = () => {
  const uuid = useQuery().get('uuid');
  const email = useQuery().get('email');

  return (
    <div className="w-screen grid h-screen grid-cols-2">
      <div className="grid place-items-center">
        <img
          alt="vector of email in computer"
          src={process.env.PUBLIC_URL + '/img/email-code-page.jpg'}
          className="w-3/5 p-8"
        />
      </div>
      <div className="bg-[#A2F5B5] grid place-content-center">
        <ValidateEmailForm email={email} uuid={uuid} />
      </div>
    </div>
  );
};

export default EmailVerification;
