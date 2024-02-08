import { useMemo } from 'react';
import TextInput from './TextInput';
import { Name } from './App';

const FormContainer = ({handleNameUpdate, name}: {handleNameUpdate:(field: "first" | "last", newName: string) => void, name: Name }) => {
  return useMemo(() => (
    <div className="container">
      <h5>FormContainer</h5>
      <TextInput value="first" handleNameUpdate={handleNameUpdate} name={name.first} />
      <TextInput value="last" handleNameUpdate={handleNameUpdate} name={name.last}  />
    </div>
  ), [handleNameUpdate, name.first, name.last]);
}

export default FormContainer;  