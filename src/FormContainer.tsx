import TextInput from './TextInput';
import { Name } from './App';
import { useState } from 'react';

const FormContainer = ({ handleNameUpdate, name }: { handleNameUpdate: (e: any, form: { first: string; last: string }) => void, name: Name }) => {

  const [formData, setFormData] = useState({
    first: "",
    last: "",
  })

  const handleChange = (field: keyof typeof name, newName: string) => {
    const updatedName = {
      ...formData,
      [field]: newName
    }
    setFormData(updatedName)
  }

  return (
    <form className="container" onSubmit={(e) => handleNameUpdate(e, formData)}>
      <h5>FormContainer</h5>
      <TextInput value="first" handleChange={handleChange} name={formData.first} />
      <TextInput value="last" handleChange={handleChange} name={formData.last} />
      <button type='submit' aria-label='Submit'>Submit</button>
    </form>
  );
}

export default FormContainer