import { getTrending } from "./api";
import { Trending } from "../types";
import { useState, useEffect } from "react";

interface RecipeDisplay {
  title?: string;
  ratings?: number;
}

const RecipeContainer = () => {
  const [trendingRecipes, setTrendingRecipes] = useState<Trending[] | undefined>();

  useEffect(() => {
    const fetchTrending = async () => {
      const trending = await getTrending();
      setTrendingRecipes(trending);
    };
    fetchTrending();
  }, [])

  const display: RecipeDisplay = {
    title: trendingRecipes?.[0]?.title ?? "No Title Available",
    ratings: trendingRecipes?.[0]?.rating?.attributes.userRatingsCount ?? 0,
  }

  return (
    <section className="container">
      <h5>RecipeContainer</h5>
        <p>{`Title: ${display.title}`}</p>
        <p>{`Ratings: ${display.ratings}`}</p>
    </section>
  )
}

export default RecipeContainer;