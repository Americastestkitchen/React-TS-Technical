import React from 'react';

interface TextInputProps {
  name: string;
  value: string;
  handleNameUpdate: (field: "first" | "last", newName: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ name, value, handleNameUpdate }) => {
  return (
    <div className="field">
      {`${value}: `}
      <input
        value={name}
        onChange={(e) => handleNameUpdate(value as "first" | "last", e.target.value)}
      />
    </div>
  );
};

export default TextInput;