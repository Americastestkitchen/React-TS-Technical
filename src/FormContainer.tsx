import TextInput from './TextInput';
import { FormData } from './lib/types';

const FormContainer = ({ fields }: { fields: FormData[] }) => {
  return (
    <div className="container">
      <h5>FormContainer</h5>
      {fields.map(({field, value, handleChange}) => (
        <TextInput key={field} field={field} value={value} handleChange={handleChange} />
      ))}
    </div>
  );
}

export default FormContainer