import { Dispatch, SetStateAction } from 'react';

export type User = { name: string; isSignedIn: boolean };

export type AppState = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  trendingRecipes: TrendingRecipe[];
  setTrendingRecipes: Dispatch<SetStateAction<TrendingRecipe[]>>;
};

export type HoveredStar = {
  rowId: number;
  idx: number;
};

// eslint-disable-next-line no-unused-vars
export type HandleSetRatingProps = (recipe: RecipeCookie, recipeIndex: number, stars: number) => void;

export type RecipeCardProps = {
  recipe: RecipeCookie;
  recipeIndex: number;
  handleSetRating: HandleSetRatingProps;
};

export type HandleChange = () => void;

export type TextInputType = {
  value: string;
  field: string;
  handleChange: HandleChange;
};

export type FormData = {
  field: string;
  value: string;
  handleChange: HandleChange;
};

export type DisplayField = { label: string; value: string | number };

export interface TrendingRecipe {
  document_id: number;
  count: number;
  document_type: string;
  title: string;
  rating: Rating;
}

export type RecipeCookie = {
  avgScore: number;
  documentId: number;
  img: string;
  ratedByUser: number;
  title: string;
  userRatingsCount: number;
};

export type Rating = {
  attributes: {
    avgScore?: number;
    rateableId?: number;
    rateableType?: string;
    userRatingsCount?: number;
  };
};
