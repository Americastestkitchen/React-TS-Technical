import { useEffect, useState } from "react";
import { getTrending } from "./api";
import { FormData, HandleChange, HandleNameUpdate, Name, Trending, DisplayField } from "./lib/types";
import ContentContainer from "./ContentContainer";

function App() {
  const [name, setName] = useState<Name>({
    first: "",
    last: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [trendingRecipes, setTrendingRecipes] = useState<Trending[] | undefined>([])

  const handleNameUpdate: HandleNameUpdate = (field, newName) => {
    setName((prevState) => {
      return {
        ...prevState,
        [field]: newName
      }
    })
  }

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

  const parseRecipeData = () => {
    if (trendingRecipes && trendingRecipes.length) {
      const recipeData: DisplayField[] = [
        {
          label: "Title",
          value: trendingRecipes[0].title,
        },
        {
          label: "Number of User Ratings",
          value: trendingRecipes[0].rating?.attributes?.userRatingsCount || 0
        }
      ]
      return recipeData;
    }
    return [];
  }

  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true);
      const response = await getTrending();
      setTrendingRecipes(response);
      setLoading(false);
    }
    fetchTrending();
  }, [])

  return (
    <div className="container">
      <h5>App</h5>
      <ContentContainer
        content={{ formData, recipeData: parseRecipeData() }}
        loading={loading}
      />
    </div>
  );
}

export default App;
