import { useEffect, useState } from "react";
import ContentContainer from "./ContentContainer";
import { Trending, getTrending } from "./api";

export type Name = { first: string, last: string }

function App() {
  const [name, setName] = useState({
    first: "",
    last: "",
  });

  const [trendingRecipes, setTrendingRecipes] = useState<Trending[]>()

  const handleNameUpdate = (e: any, form: { first: string; last: string }) => {
    e.preventDefault();
    setName(form);
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
      {trendingRecipes?.length ?
        trendingRecipes.map((trending: Trending) => {
          return <p key={trending.document_id}>Recipe: {trending.title} | User Rating: {trending.rating?.attributes.userRatingsCount ? trending.rating?.attributes.userRatingsCount : 0}</p>
        })
        : null
      }
    </div>

  );
}

export default App;
