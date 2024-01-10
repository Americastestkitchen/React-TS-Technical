import { memo } from "react";
import Display from "./Display";
import { Name, DisplayField } from "./lib/types";

const DisplayContainer = ({ fields, title }: { fields: DisplayField[], title: string }) => {

  return (
    <div className="container">
      <h5>{title}</h5>
      {fields.map(({ label, value }) => (
        <Display key={label} label={label} value={value} />
      )
      )}
    </div>
  );
}


export default DisplayContainer
