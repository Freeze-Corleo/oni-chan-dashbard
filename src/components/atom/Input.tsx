import React from 'react';

const Input = ({
  type = 'text',
  nameInput = '',
  onChangeFunction,
}: {
  type: string;
  nameInput: string;
  onChangeFunction: (
    event: React.ChangeEvent<{ name: string; value: string }>
  ) => void;
}) => {
  return (
    <input
      className=""
      type={type}
      onChange={onChangeFunction}
      name={nameInput}
    />
  );
};

export default Input;
