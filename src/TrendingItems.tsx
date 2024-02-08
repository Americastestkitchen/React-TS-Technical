import React from "react";
import { Trending } from "./api";

type TrendingItemsProps = {
  trendingRecipes?: Trending | null;
};

export const TrendingItems: React.FC<TrendingItemsProps> = ({
  trendingRecipes,
}) => {
  if (!trendingRecipes) {
    return null;
  }

  return (
    <div className="container">
      {trendingRecipes && (
        <div>
          <h3> Trending Recipes</h3>
          <ul>
            {trendingRecipes.map((recipe) => (
              <li key={recipe.id}>
                <p>Title: {recipe.title}</p>
                <p>User Ratings Count: {recipe.rating.attributes.userRatingsCount ?? 0}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
