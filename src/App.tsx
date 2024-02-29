import { useEffect, useState } from "react";
import ContentContainer from "./ContentContainer";
import { Trending, getTrending } from "./api";
import TrendingList from "./TrendingList";

export type Name = {first: string, last: string}

function App() {
  const [name, setName] = useState({
    first: "",
    last: "",
  });
  const [trendingRecipes, setTrendingRecipes] = useState<Trending[]>()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleNameUpdate=(field: keyof typeof name, newName: string) => {
    setName(prevState => ({
      ...prevState,
      [field]: newName
    }))
  }

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const trending = await getTrending()
        setTrendingRecipes(trending)
        setErrorMessage(null)
      } catch (error) {
        console.error('Error in fetching trending data: ', error)
        setErrorMessage('Failed to fetch trending data')
      }
    } 
    fetchTrending()
  }, [])

  return (
      <div className="container">
        <h5>App</h5>
        <ContentContainer handleNameUpdate={handleNameUpdate} name={name} />
        {errorMessage && <p>{errorMessage}</p>}
        {trendingRecipes && <TrendingList trendingRecipes={trendingRecipes}/>}
      </div>

  );
}

export default App;