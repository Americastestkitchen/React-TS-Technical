import { useContext } from 'react';
import TextInput from '../../TextInput';
import AppContext from '../../context/AppContext';
import { FormData, HandleChange } from '../../lib/types';

const Form = ({ title, fields }: { title: string, fields: FormData[] }) => {


  return (
    <section className="container">
      <h5>Check In</h5>
      {fields.map((fieldProps) => (
        <TextInput key={fieldProps.field} {...fieldProps} />
      ))}
    </section>
  );
}

export default Form