import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { updateRating } from '../../lib/utils';
import { getTrendingRecipes } from '../../lib/api';
import { TrendingRecipe, HandleSetRatingProps, RecipeCookie } from '../../lib/types';
import RecipeCard from './RecipeCard';
import styles from "./styles.module.css"

export default function TrendingRecipes() {
  const [cookies, setCookie] = useCookies(["user", "recipes"])
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {

    const recipeImages: { [key: number]: string } = {
      // I've manually set a photo that goes with the recipes that we get in the response
      // This stuff is obv hard coded and the images are stored statically in the repo
      // This is fairly volatile code and will break if:
      //    // the shape of the API response changes
      //    // the document_id on the recipes changes
      //    // the response returns more than 4 recipes
      8125: "chocolate-crinkle-cookies.jpg",
      15809: "mushroom-burger.jpeg",
      9067: "scallion-pancakes.jpeg",
      9305: "easy-pound-cake.jpg",
    }

    const fetchTrendingRecipes = async () => {
      try {
        setLoading(true);
        const response = await getTrendingRecipes();
        if (!response.ok) {
          throw new Error("Some error has occurred while fetching TrendingRecipes");
        }
        const trending = await response.json()
        const parsedRecipes = trending.map((recipe: TrendingRecipe) => ({
          documentId: recipe.document_id,
          avgScore: recipe.rating.attributes.avgScore,
          userRatingsCount: recipe.rating.attributes.userRatingsCount,
          title: recipe.title,
          ratedByUser: 0,
          img: recipeImages[recipe.document_id]
        }))
        setCookie("recipes", parsedRecipes);
        setError(null)
      } catch (err) {
        console.error(err)
        setError("Sorry ... I can't find today's Trending Recipes");
      } finally {
        setLoading(false);
      }
    }

    if (!cookies.recipes?.length) {
      fetchTrendingRecipes();
    }

  }, [setCookie, cookies.recipes?.length])

  const handleSetRating: HandleSetRatingProps = (recipe, recipeIndex, stars) => {
    if (!cookies.user || recipe.ratedByUser) return;

    const updatedRecipe = updateRating(recipe, stars);
    const updatedRecipeList = [...cookies.recipes];
    updatedRecipeList[recipeIndex] = updatedRecipe;

    setCookie("recipes", updatedRecipeList);
  };

  if (loading) {
    return <section className="container">LOADING . . .</section>
  }
  if (error && !loading) {
    return <section className="container">{error}</section>
  }
  return (
    <article className={styles.wrapper}>
      {cookies.recipes?.map((recipe: RecipeCookie, idx: number) => (
        <RecipeCard key={recipe.documentId} recipe={recipe} recipeIndex={idx} handleSetRating={handleSetRating} />
      ))}
    </article>
  );
}
