import { Field } from "./ContentContainer";
import { Name } from "./App";

const TextInput = ({ value, handleNameUpdate, name, prevNameRef }: { name: string, value: Field, handleNameUpdate:(field: "first" | "last", newName: string) => void, prevNameRef: React.RefObject<Name> } ) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleNameUpdate(value, e.target.value)
    if(prevNameRef.current){
    prevNameRef.current[value] = e.target.value}
  }
  
  return (
    <div className="field">
      {`${value}: `}
      <input
        value={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextInput