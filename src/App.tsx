import { useState, useMemo } from "react";
import ContentContainer from "./ContentContainer";
import primeFactorize from "./utils";

export type Name = {first: string, last: string}

function App() {
  const [name, setName] = useState({
    first: "",
    last: "",
  });

  //I refactored and used the spread operator to create a copy of the previous state,
  //then updated the field with the new name object.
  const handleNameUpdate=(field: keyof typeof name , newName: string) => {
    setName((prevState) => ({
      ...prevState,
      [field]: newName,
    }));
  };

  //I removed the numOfFactors function from ContentContainer for better optimization.
  const numOfFactors = useMemo(() => {
    return primeFactorize(100000000000000000).length
  }, []);

  return (
      <div className="container">
        <h5>App</h5>
        <ContentContainer handleNameUpdate={handleNameUpdate} name={name} num={numOfFactors} />
      </div>
  );
}

export default App;
