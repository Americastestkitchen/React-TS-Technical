import { memo, useMemo } from "react";
import Display from "./Display";
import { Name } from "./App";

const DisplayContainer = ({name}: {name: Name}) => {

  const firstName = useMemo(() => `${name.first}`, [name.first]);
  const lastName = useMemo(() => `${name.last}`, [name.last]);
    // set up useMemo function, app still slow?

  return (
    <div className="container">
      <h5>DisplayContainer</h5>
      <Display value="first name" name={name.first}  />
      <Display value="last name" name={name.last} />
    </div>
  );
}


export default DisplayContainer
