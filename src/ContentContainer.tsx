import { useState, useEffect } from "react";
import { FormData, DisplayField } from "./lib/types";
import DisplayContainer from "./DisplayContainer";
import FormContainer from "./FormContainer";

const ContentContainer = ({ content, loading }: {
  content: { formData: FormData[], recipeData: DisplayField[] },
  loading: boolean,
}) => {
  const { formData, recipeData } = content;
  const [importantNumber, setImportantNumber] = useState("")
  
  const displayFields = formData.map(({ field, value }) => ({ label: `${field} name`, value }));

  useEffect(() => {
    const worker = new Worker("./primeWorker.js")
    worker.onmessage = (e) => {
      console.log(e.data)
      setImportantNumber(e.data);
    }

    worker.postMessage(null);
    return () => worker.terminate();
  }, [formData])

  const getTitle = () => {
    if (!loading && !recipeData.length) {
      return "Something is wrong... :("
    }
    return loading ? " LOADING... " : "Recipe Display Container";
  }


  return (
    <div className="container">
      <h5>{`Important Number: ${importantNumber}`}</h5>
      <FormContainer fields={formData} />
      <DisplayContainer title="Form Display Container" fields={displayFields} />
      <DisplayContainer
        title={getTitle()}
        fields={loading ? [] : recipeData}
      />
    </div>
  );
};

export default ContentContainer
