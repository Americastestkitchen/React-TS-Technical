import { TrendingRecipe } from "./lib/types";

export const getTrendingRecipes = async (): Promise<TrendingRecipe[]> => {
  try {
    const response = await fetch(
      "https://speak-easy-staging.herokuapp.com/api/analytics/trending/atk",
    );
    if (!response.ok) {
      throw new Error(
        "Some error has occurred while fetching TrendingRecipes",
      );
    }
    const trending = await response.json();
    return trending.map((recipe: TrendingRecipe) => ({ ...recipe, ratedByUser: 0 }));
  } catch (err) {
    console.error(err);
  }
  return [];
};
