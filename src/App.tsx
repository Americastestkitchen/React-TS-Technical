import { useEffect, useState, useMemo } from "react";
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
  const memoizedName = useMemo(() => name, [name]);

  const handleNameUpdate=(field: keyof typeof memoizedName, newName: string) => {
    setName((prevState) => { 
      return {
        ...prevState, [field]: newName
    }
  });}

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const trending = await getTrending();
  
        if (Array.isArray(trending) && trending.length > 0) {
          setTrendingRecipes(trending);
        } else {
          console.error('Empty or Invalid');
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
  
    fetchTrending();
  }, []);
  

  return (
      <div className="container">
        <h5>App</h5>
        <ContentContainer handleNameUpdate={handleNameUpdate} name={name} />
        <TrendingItems trendingRecipes={trendingRecipes}/>
      </div>
  );
}

export default App;
