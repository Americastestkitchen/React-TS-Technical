import { useMemo } from "react";
import { Name } from "./App";
import DisplayContainer from "./DisplayContainer";
import FormContainer from "./FormContainer";
import primeFactorize from "./utils";

export type Field = "first" | "last"


const ContentContainer = ({name, handleNameUpdate}: { name: Name, handleNameUpdate:(field: Field , newName: string) => void }) => {

  const numOfFactors = useMemo(() => {
  // This takes a long time to run
  // useMemo function to fix?- 
    return primeFactorize().length
  }, [name]);

  return (
    <div className="container">
      <h5>{`Important Number: ${numOfFactors}`}</h5>
      {/* removed--> {numOfFactors()} to get rid of keeps returning "error occurs "Uncaught TypeError: numOfFactors is not a function"*/}
      <FormContainer handleNameUpdate={handleNameUpdate} name={name} />
      <DisplayContainer name={name} />
    </div>
  );
};

export default ContentContainer