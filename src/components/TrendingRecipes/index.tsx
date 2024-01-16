import { useState, useEffect, useContext } from 'react';
import { getTrendingRecipes } from '../../api';
import { TrendingRecipe, HandleSetRatingProps } from '../../lib/types';
import { updateRating } from '../../utils';
import AppContext from '../../context/AppContext';
import RecipeCard from './RecipeCard';

export default function TrendingRecipes() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null)

  const { trendingRecipes, setTrendingRecipes } = useContext(AppContext);

  useEffect(() => {
    const fetchTrendingRecipes = async () => {
      try {
        setLoading(true);
        const response = await getTrendingRecipes();
        if (!response.ok) {
          throw new Error("Some error has occurred while fetching TrendingRecipes");
        }
        const trending = await response.json()
        setTrendingRecipes(trending.map((recipe: TrendingRecipe) => ({ ...recipe, ratedByUser: 0 })));
        setError(null)
      } catch (err) {
        console.error(err)
        setError("Sorry ... I can't find today's Trending Recipes");
      } finally {
        setLoading(false);
      }
    }

    if (!trendingRecipes.length) {
      fetchTrendingRecipes();
    }

  }, [setTrendingRecipes, trendingRecipes.length])


  const handleSetRating: HandleSetRatingProps = (recipe, recipeIndex, stars) => {
    if (recipe.ratedByUser) return;

    const updatedRecipe = updateRating(recipe, stars);
    const updatedRecipeList = [...trendingRecipes];
    updatedRecipeList[recipeIndex] = updatedRecipe;

    setTrendingRecipes(updatedRecipeList);
  };


  if (loading) {
    return <section className="container">LOADING . . .</section>
  }
  if (error && !loading) {
    return <section className="container">{error}</section>
  }
  return (
    <article>
      {trendingRecipes?.map((recipe, idx) => (
        <RecipeCard key={recipe.document_id} recipe={recipe} recipeIndex={idx} handleSetRating={handleSetRating} />
      ))}
    </article>
  );
}
