import { useMemo } from "react";
import { Name } from "./App";
import DisplayContainer from "./DisplayContainer";
import FormContainer from "./FormContainer";
import primeFactorize from "./utils";

export type Field = "first" | "last"


const ContentContainer = ({name, handleNameUpdate}: { name: Name, handleNameUpdate:(field: Field , newName: string) => void }) => {

  // used the React hook 'useMemo' to memoize the result of this function
  // this caches the result and doesn't rerun the function unless something in its dependancy array changes
  // however, i passed along an empty dependency array, so it never reruns the function after the initial render
  // because im using the hook in this way, you could probably also use something like useCallback to the same effect
  const numOfFactors =useMemo(() => {
    // fixable
    // This takes a long time to run
    return primeFactorize().length
  }, [])
  
  return (
    <div className="container">
      <h5>{`Important Number: ${numOfFactors}`}</h5>
      <FormContainer handleNameUpdate={handleNameUpdate} name={name} />
      <DisplayContainer name={name} />
    </div>
  );
};

export default ContentContainer
