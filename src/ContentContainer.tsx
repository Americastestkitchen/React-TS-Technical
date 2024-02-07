import { useState, useEffect } from "react";
import { Name } from "./App";
import DisplayContainer from "./DisplayContainer";
import FormContainer from "./FormContainer";
import primeFactorize from "./utils";

export type Field = "first" | "last"

const ContentContainer = ({ name, handleNameUpdate }: { name: Name, handleNameUpdate: (field: Field, newName: string) => void }) => {
  const [numFactors, setNumFactors] = useState<number | null>(null);

  useEffect(() => {
    const calculateFactors = async () => {
      const factors = await primeFactorize();
      setNumFactors(factors.length);
    };

    calculateFactors();
  }, []); 

  return (
    <div className="container">
      <h5>{`Important Number: ${numFactors !== null ? numFactors : 'Calculating...'}`}</h5>
      <FormContainer handleNameUpdate={handleNameUpdate} name={name} />
      <DisplayContainer name={name} />
    </div>
  );
};

export default ContentContainer
