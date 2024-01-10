import { DisplayField } from "./lib/types";


const Display = ({ label, value }: DisplayField) => {

  return (
    <div className="value">
      {label}: {value}
    </div>
  );
};

export default Display