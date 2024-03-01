import TextInput from './TextInput';
import { Name } from './App';

const FormContainer = ({handleNameUpdate, name, prevNameRef}: {handleNameUpdate:(field: "first" | "last", newName: string) => void, name: Name, prevNameRef: React.RefObject<Name> }) => {
  return (
    <div className="container">
      <h5>FormContainer</h5>
      <TextInput value="first" handleNameUpdate={handleNameUpdate} name={name.first} prevNameRef={prevNameRef} />
      <TextInput value="last" handleNameUpdate={handleNameUpdate} name={name.last}  prevNameRef={prevNameRef} />
    </div>
  );
}

export default FormContainer