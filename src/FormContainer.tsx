import TextInput from './TextInput';
import { Name } from "../types";

interface FormContainerProps {
  handleNameUpdate: (field: "first" | "last", newName: string) => void;
  name: Name;
}

const FormContainer: React.FC<FormContainerProps> = ({ handleNameUpdate, name }) => {
  return (
    <div className="container">
      <h5>FormContainer</h5>
      <TextInput value="first" handleNameUpdate={handleNameUpdate} name={name.first} />
      <TextInput value="last" handleNameUpdate={handleNameUpdate} name={name.last} />
    </div>
  );
}

export default FormContainer;