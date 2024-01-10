import { useState, useEffect } from "react";
import { FormData } from "./lib/types";
import DisplayContainer from "./DisplayContainer";
import FormContainer from "./FormContainer";
import primeFactorize from "./utils";


const ContentContainer = ({ formData }: { formData: FormData[] }) => {
  const [importantNumber, setImportantNumber] = useState("")
  const displayFields = formData.map(({ field, value }: { field: string, value: string }) => ({ label: field, value }))

  useEffect(() => {
    const worker = new Worker("./primeWorker.js")
    worker.onmessage = (e) => {
      console.log(e.data)
      setImportantNumber(e.data);
    }

    worker.postMessage(null);
    return () => worker.terminate();
  }, [formData])


  return (
    <div className="container">
      <h5>{`Important Number: ${importantNumber}`}</h5>
      <FormContainer fields={formData} />
      <DisplayContainer fields={displayFields} />
    </div>
  );
};

export default ContentContainer
