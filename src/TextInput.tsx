import React, { useCallback, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

interface TextInputProps {
  value: string;
  handleNameUpdate: (field: "first" | "last", newName: string) => void;
  name: string;
};

//I'm using useDebouncedCallback function to debounce the handleNameUpdate function.
//The TextInput component will delay the execution of handleNameUpdate by 1 second and other components will not unnecessarily re-render.
//I also added some state management to the input values so the TextInput component can better handle the debouncing.
const TextInput: React.FC<TextInputProps> = ({value, handleNameUpdate, name}) => {
  const [inputValue, setInputValue] = useState(name);

  const debouncedHandleNameUpdate = useDebouncedCallback(
    (newValue: string) => {
      handleNameUpdate(value as "first" | "last", newValue);
    },
    1000
  );

  //useCallback function is used to make sure the function remains constant unless debouncedHandleNameUpdate is changed.
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      debouncedHandleNameUpdate(newValue);
    },
    [debouncedHandleNameUpdate]
  );

  return (
    <div className="field">
      {`${value}: `}
      <input
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  )
};

export default TextInput
