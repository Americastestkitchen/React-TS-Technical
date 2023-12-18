import { Name } from "./App";
import DisplayContainer from "./DisplayContainer";
import FormContainer from "./FormContainer";

const ContentContainer = ({name, handleNameUpdate, num}: { name: Name, handleNameUpdate:(field: "first" | "last", newName: string) => void, num: number }) => {

  return (
    <div className="container">
      <h5>Important Number: {num}</h5>
      <FormContainer handleNameUpdate={handleNameUpdate} name={name} />
      <DisplayContainer name={name} />
    </div>
  );
};

export default ContentContainer
