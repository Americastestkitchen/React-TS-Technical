import { useEffect, useState } from "react";
import ContentContainer from "./ContentContainer";
import { Trending, getTrending } from "./api";

export type Name = {first: string, last: string}

function App() {
  const [name, setName] = useState({
    first: "",
    last: "",
  });

  const [trendingRecipes, setTrendingRecipes] = useState<Trending[]>()

  // const handleNameUpdate=(field: keyof typeof name, newName: string) => {
  //   // not working, wont update, explain why, how
  //   setName((prevState) => {
  //     prevState[field] = newName
  //     return prevState
  //   })
  // }

  // I'm pretty sure the above wasn't working because the existing state object was being mutated and returned.
  // Because of this, there is no new state reference so react doesn't bother to rerender.

  // The edited method below fixes this by creating a new state object, made up of a shallow copy of the previous states contents plus the new field data

  const handleNameUpdate=(field: keyof typeof name, newName: string) => {
    // not working, wont update, explain why, how
    setName((prevState) => ({
      ...prevState,
      [field]: newName
    }))
  } 

  useEffect(() => {
    const fetchTrending = async () => {
      const trending = await getTrending()
      // console.log(trending)
      setTrendingRecipes(trending)
    } 
    fetchTrending()
   }, [])


  const TrendingContainer = () => {
    return (
      <div className="container">
        <h5>{`trending items`}</h5>
        {trendingRecipes?.map((e) => {
        
          // checking if the userRatingsCount is null or missing, replacing with 0 if so
          const adjustedUserRatingsCount = e.rating.attributes.userRatingsCount ? e.rating.attributes.userRatingsCount : 0
          return (
            <div key={e.document_id}>
              <div>
                {e.title}
              </div>
              <div>
                {adjustedUserRatingsCount}
                <p></p>
              </div>
            </div>
          )
        })}
      </div>
    )
  } 

  // const memoizedContentContainer = useCallback((() => {
  //   return <ContentContainer handleNameUpdate={handleNameUpdate} name={name} />
  // }), [ContentContainer])

  return (
      <div className="container">
        <h5>App</h5>
        {/* {memoizedContentContainer()} */}
        <ContentContainer handleNameUpdate={handleNameUpdate} name={name} />
        {TrendingContainer()}
        {/* Render a component here that renders a list of trending items from the getTrending api function.
         Display the title and userRatingsCount (Default the userRatingsCount to 0 if the field is null or missing in the api response) 
        */}
      </div>
  );
}

export default App;
