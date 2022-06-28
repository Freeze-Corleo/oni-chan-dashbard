import React from 'react';

interface ITextAreaProps {
  rowNumber: number;
  textAreaName: string;
  onChangeFunction: (
    _event: React.ChangeEvent<{ name: string; value: string }>
  ) => void;
  value: string;
  placeholder: string;
}

const TextAreaForm: React.FC<ITextAreaProps> = ({
  value,
  textAreaName = '',
  rowNumber = 1,
  onChangeFunction,
  placeholder,
}) => {
  return (
    <>
      <textarea
        rows={rowNumber}
        cols={4}
        className={`p-3 outline-none border-solid rounded-md py-2 w-full focus:border-black border-2 border-gray-200 transition duration-300 ease-in-out`}
        name={textAreaName}
        onChange={onChangeFunction}
        value={value}
        required
        placeholder={placeholder}
      />
    </>
  );
};

export default TextAreaForm;
