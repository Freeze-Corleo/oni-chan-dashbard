import React from 'react';

const Input = ({
  type = 'text',
  nameInput = '',
  placeholder = '',
  onChangeFunction,
}: {
  type: string;
  nameInput: string;
  placeholder: string;
  onChangeFunction?: (
    event: React.ChangeEvent<{ name: string; value: string }>
  ) => void;
}) => {
  return (

    <div className="w-[320px]">
      <input
        className="shadow-2xl bg-slate-100 border pl-10 border-gray-300 text-gray-900 text-sm w-full rounded-full block py-2 px-4 tracking-wide"
        type={type}
        onChange={onChangeFunction}
        name={nameInput}
        placeholder={placeholder}
        style={{ backgroundColor: '#F2F2F2' }}
      />
    </div>
  );
};

export default Input;
