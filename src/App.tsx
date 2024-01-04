import ContentContainer from "./ContentContainer";
import RecipeContainer from "./RecipeContainer";

import primeFactorize from "./utils";
import { useMemo } from "react";

function App() {
  const numOfFactors =useMemo(() => {
    // This takes a long time to run
    return primeFactorize(100000000000000000).length
  },[])

  return (
      <div className="container">
        <h5>App</h5>
        <ContentContainer numOfFactors={numOfFactors}/>
        <RecipeContainer />
      </div>
 
  );
}

export default App;
