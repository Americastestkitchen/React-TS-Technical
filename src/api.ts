import { Trending } from "./lib/types";

export const getTrending = async (): Promise<Trending[] | undefined> => {
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
    return trending;
  } catch (err) {
    console.error(err);
  }
  return;
};
