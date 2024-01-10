import { memo } from "react";
import Display from "./Display";
import { Name, DisplayField } from "./lib/types";

const DisplayContainer = ({ fields }: { fields: DisplayField[] }) => {

  return (
    <div className="container">
      <h5>DisplayContainer</h5>
      {fields.map(({ label, value }) => (
        <Display key={label} label={`${label} name`} value={value} />
      )
      )}
    </div>
  );
}


export default DisplayContainer
