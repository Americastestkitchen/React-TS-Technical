import { useEffect, useState } from "react";
import ContentContainer from "./ContentContainer";
import { getTrending } from "./api";
import { FormData, HandleChange, HandleNameUpdate } from "./lib/types";



function App() {
  const [name, setName] = useState({
    first: "",
    last: "",
  });
  const [trendingRecipes, setTrendingRecipes] = useState()

  const handleNameUpdate: HandleNameUpdate = (field, newName) => {
    setName((prevState) => {
      return {
        ...prevState,
        [field]: newName
      }
    })
  }

  useEffect(() => {
    const fetchTrending = async () => {
      const trending = await getTrending()
      setTrendingRecipes(trending)
    }
    fetchTrending()
  }, [])

  const formData: FormData[] = [
    {
      field: "first",
      value: name.first,
      handleChange: handleNameUpdate as HandleChange,
    },
    {
      field: "last",
      value: name.last,
      handleChange: handleNameUpdate as HandleChange,
    }
  ]

  return (
    <div className="container">
      <h5>App</h5>
      <ContentContainer formData={formData} />
      {/* Render a component here that displays the title and userRatingsCount (IF there is an associated rating object on the returned data) of the
        first item coming back from the fetchTrending function in the useEffect */}
    </div>

  );
}

export default App;
