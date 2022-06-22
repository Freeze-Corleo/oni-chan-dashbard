import React from 'react';

export interface IButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({ label = '', onClick }) => {
  return (
    <div className="grid place-content-center w-full">
      <button
        type="button"
        className="text-white shadow-2xl font-medium rounded-full text-sm px-10 py-3 text-center inline-flex items-center bg-black"
        onClick={onClick}
      >
        <p>{label}</p>
      </button>
    </div>
  );
};

export default Button;
