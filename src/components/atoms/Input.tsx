import React from 'react';

export interface IInputProps {
  type: string;
  nameInput: string;
  placeholder: string;
  onChangeFunction?: (
    event: React.ChangeEvent<{ name: string; value: string }>
  ) => void;
  value?: string | null;
}

const Input: React.FC<IInputProps> = ({
  type = 'text',
  nameInput = '',
  placeholder = '',
  onChangeFunction,
  value = null,
}) => {
  return (
    <div className="w-[320px]">
      {value !== null && (
        <input
          className="shadow-2xl bg-slate-100 border pl-10 border-gray-300 text-gray-900 text-sm w-full rounded-full block py-2 px-4 tracking-wide"
          type={type}
          onChange={onChangeFunction}
          name={nameInput}
          placeholder={placeholder}
          value={value}
          style={{ backgroundColor: '#F2F2F2' }}
        />
      )}
      {value === null && (
        <input
          className="shadow-2xl bg-slate-100 border pl-10 border-gray-300 text-gray-900 text-sm w-full rounded-full block py-2 px-4 tracking-wide"
          type={type}
          onChange={onChangeFunction}
          name={nameInput}
          placeholder={placeholder}
          style={{ backgroundColor: '#F2F2F2' }}
        />
      )}
    </div>
  );
};

export default Input;
