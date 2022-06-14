import React from 'react';

import Input from '../../atom/Input';

const RegisterForm = () => {
  const onChangeValueRegister = (
    event: React.ChangeEvent<{ name: string; value: string }>
  ) => {};

  return (
    <div>
      <h2>S'inscrire</h2>
      <div>
        <h3>Email:</h3>
        <Input
          type="text"
          nameInput="email"
          onChangeFunction={onChangeValueRegister}
        />
      </div>
    </div>
  );
};

export default RegisterForm;
