import { useEffect, useState } from "react";
import ContentContainer from "./ContentContainer";
import { Trending, getTrending } from "./api";
import { TrendingItems } from "./TrendingItems";

export type Name = {first: string, last: string}

function App() {
  const [name, setName] = useState({
    first: "",
    last: "",
  });
  const [trendingRecipes, setTrendingRecipes] = useState<Trending>()

  const handleNameUpdate=(field: keyof typeof name, newName: string) => {
    setName((prevState) => { 
      return {
        ...prevState, [field]: newName
    }
  });}

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
        <TrendingItems trendingRecipes={trendingRecipes}/>
      </div>
 
  );
}

export default App;
