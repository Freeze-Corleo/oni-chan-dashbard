import React from 'react';

const Input = ({
  type = 'text',
  nameInput = '',
  placeholder = "",
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
    <input
      className="shadow-2xl bg-slate-100 pl-10 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      type={type}
      onChange={onChangeFunction}
      name={nameInput}
      placeholder={placeholder}
      style={{backgroundColor: "#F2F2F2"}}
    />
  );
};

export default Input;
