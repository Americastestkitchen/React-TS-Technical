import { useMemo } from "react";
import { Name } from "./App";
import DisplayContainer from "./DisplayContainer";
import FormContainer from "./FormContainer";
import primeFactorize from "./utils";

export type Field = "first" | "last"


const ContentContainer = ({ name, handleNameUpdate }: { name: Name, handleNameUpdate: (e: any, form: { first: string; last: string }) => void }) => {

  const numOfFactors = () => {
    // This takes a long time to run
    const primeNumbers = useMemo(() => {
      return primeFactorize().length;
    }, [])

    return primeNumbers;
  }


  return (
    <div className="container">
      <h5>{`Important Number: ${numOfFactors()}`}</h5>
      <FormContainer handleNameUpdate={handleNameUpdate} name={name} />
      <DisplayContainer name={name} />
    </div>
  );
};

export default ContentContainer
