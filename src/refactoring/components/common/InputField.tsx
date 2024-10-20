import React from 'react';

type InputFieldProps = {
  id: string;
  type: string;
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({ label, id, type, value, onChange }: InputFieldProps) => {
  return (
    <div className="mb-2">
      <label
        htmlFor="productStock"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default InputField;
