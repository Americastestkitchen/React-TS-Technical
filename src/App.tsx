import { useEffect, useState } from "react";
import ContentContainer from "./ContentContainer";
import { Trending, getTrending } from "./api";
import FormContainer from "./FormContainer";
import DisplayContainer from "./DisplayContainer";

export type Name = {first: string, last: string}

function App() {
  const [name, setName] = useState({
    first: "",
    last: "",
  });
  const [trendingRecipes, setTrendingRecipes] = useState<Trending []>()

  const handleNameUpdate=(field: keyof typeof name, newName: string) => {
    // The form input is not updating can you explain why?- react state imutable
    setName((prevState) => {
      prevState[field] = newName
      
      //Change from--> return prevState
      return {...prevState, [field] :newName};
            // still does not declare Form/DisplayContainer so this may be incorrect
    });
    
   
  }

  useEffect(() => {
    const fetchTrending = async () => {
      const trending = await getTrending()
      setTrendingRecipes(trending)
    } 
    fetchTrending()
   }, [])

  return (
      <div className="container">
        <h5>App</h5>
        <ContentContainer handleNameUpdate={handleNameUpdate} name={name} />
        {/* Render a component here that renders a list of trending items from the getTrending api function.
         Display the title and userRatingsCount (Default the userRatingsCount to 0 if the field is null or missing in the api response) 
         */}
      {trendingRecipes?.map((item) => {
          return (
            <div key={item.document_id}>{item.title}</div>
          )
         })}

      </div>
 
  );
}

export default App;


{/*           
          get items from getTrending api
          if item does not exist, error message
          elseif succesful, render list of trending items
          display list with title
          display userRatingsCount, if value is null default to 0
           */}

{/* - The form input is not updating can you explain why? 

it is not called in the main app.tsx?*/
}
{/* - There is a performace issue on the page as well. Using hooks built-in to React can you fix it?  Is there more than one fix? Be prepared top     explain why your fix works.

The Memo function is declared in DisplayContainer.tsx, but not used. This could be set up so that the page does not have to re-render as much  */}

{/* - **BONUS:** If you were to attempt to minimize rerenders as a user types in the input fields how would you go about it? NO answer is off the table, except using a third party library.

Setting up the Memo function 
*/}