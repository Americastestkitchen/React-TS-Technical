import { Name } from "./App";
import DisplayContainer from "./DisplayContainer";
import FormContainer from "./FormContainer";
import primeFactorize from "./utils";
import { useMemo } from "react";

export type Field = "first" | "last"


const ContentContainer = ({name, handleNameUpdate, prevNameRef}: { name: Name, handleNameUpdate:(field: Field , newName: string) => void, prevNameRef: React.RefObject<Name> }) => {

  const numOfFactors = useMemo(() => {
    // This takes a long time to run
    return primeFactorize().length
  }, [])

  return (
    <div className="container">
      <h5>Important Number: ${numOfFactors}</h5>
      <FormContainer handleNameUpdate={handleNameUpdate} name={name} prevNameRef={prevNameRef} />
      <DisplayContainer name={name} />
    </div>
  );
};

export default ContentContainer
