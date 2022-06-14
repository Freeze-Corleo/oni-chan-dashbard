import React from 'react';

const Label = ({
  htmlfor = '',
  label = '',
}: {
  htmlfor: string;
  label: string;
}) => {
  return (
    <label
      className="block mb-2 text-sm py-2 font-medium text-gray-900 dark:text-gray-300"
      htmlFor={htmlfor}
    >
        {label}
    </label>
  );
};

export default Label;
