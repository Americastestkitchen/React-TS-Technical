import { Field } from "./ContentContainer";

const TextInput = ({ value, handleChange, name }: { name: string, value: Field, handleChange: (form: "first" | "last", newName: string) => void }) => {
  return (
    <div className="field">
      {`${value}: `}
      <input
        value={name}
        onChange={(e) => handleChange(value, e.target.value)}
      />
    </div>
  );
};

export default TextInput