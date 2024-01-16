import { Dispatch, SetStateAction } from "react";

export type User = { name: string, email: string }

export type AppState = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  trendingRecipes: TrendingRecipe[];
  setTrendingRecipes: Dispatch<SetStateAction<TrendingRecipe[]>>;
}

export type HoveredStar = {
  rowId: number;
  idx: number;
};

export type HandleSetRatingProps = (recipe: TrendingRecipe, recipeIndex: number, stars: number) => void

export type RecipeCardProps = {
  recipe: TrendingRecipe,
  recipeIndex: number,
  handleSetRating: HandleSetRatingProps
}

export type HandleChange = () => void

export type TextInputType = {
  value: string,
  field: string,
  handleChange: HandleChange,
}

export type FormData = {
  field: string,
  value: string,
  handleChange: HandleChange,
}

export type DisplayField = { label: string, value: string | number }

export interface TrendingRecipe {
  document_id: number;
  count: number;
  document_type: string;
  title: string;
  rating: Rating;
  ratedByUser?: number; // property added on the frontend to enable user input per recipe
}

export type Rating = {
  attributes: {
    avgScore?: number;
    rateableId?: number;
    rateableType?: string;
    userRatingsCount?: number;
  }
}