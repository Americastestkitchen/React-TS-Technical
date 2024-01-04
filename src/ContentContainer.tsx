import DisplayContainer from "./DisplayContainer";
import FormContainer from "./FormContainer";
import { useState, useCallback } from "react";

interface ContentContainerProps {
  numOfFactors: number;
}

const ContentContainer: React.FC<ContentContainerProps> = ({numOfFactors}) => {
  const [name, setName] = useState({
    first: "",
    last: "",
  })

  const handleNameUpdate=useCallback((field: keyof typeof name, newName: string) => {
    setName((prevState) => {
      return {
        ...prevState,
        [field]: newName
      }
    })
  },[])  

  return (
    <section className="container">
      <h5>{`Important Number: ${numOfFactors}`}</h5>
      <FormContainer handleNameUpdate={handleNameUpdate} name={name} />
      <DisplayContainer name={name} />
    </section>
  )
}

export default ContentContainer
