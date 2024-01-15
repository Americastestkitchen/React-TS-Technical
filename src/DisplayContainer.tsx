import Display from './Display';
import { DisplayField } from './lib/types';

const DisplayContainer = ({ title, fields }: { title: string; fields: DisplayField[] }) => {
  return (
    <div className="container">
      <h5>{title}</h5>
      {fields.map(({ label, value }) => (
        <Display key={label} label={label} value={value} />
      ))}
    </div>
  );
};

export default DisplayContainer;
