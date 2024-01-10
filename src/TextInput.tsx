import { TextInputType } from "./lib/types";

const TextInput = ({ field, handleChange, value }: TextInputType) => {
  return (
    <div className="field">
      {`${field}: `}
      <input
        value={value}
        onChange={(e) => handleChange(field, e.target.value)}
      />
    </div>
  );
};

export default TextInput