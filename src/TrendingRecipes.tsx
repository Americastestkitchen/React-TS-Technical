import { useState, useContext } from 'react';
import AppContext from './context/AppContext';
import Star from './Star';
import styles from './trendingRecipes.module.css';
import { TrendingRecipe } from './lib/types';

export default function Recipes() {
  type HoveredStar = {
    rowId: number;
    idx: number;
  };

  const [hoveredStar, setHoveredStar] = useState<HoveredStar>({ rowId: -1, idx: -1 });
  const { trendingRecipes, setTrendingRecipes } = useContext(AppContext);

  const getNewAverage = (ratingsCount: number, avgScore: number, newScore: number) => {
    const totalStars = avgScore * ratingsCount + newScore;
    return Math.round((totalStars / (ratingsCount + 1)) * 100) / 100;
  };

  const handleRating = (recipe: TrendingRecipe, recipeIndex: number, stars: number) => {
    if (recipe.ratedByUser) return;

    let { userRatingsCount, avgScore } = recipe.rating.attributes;

    userRatingsCount = userRatingsCount || 0;
    avgScore = avgScore || 0;

    const attributes = {
      ...recipe.rating.attributes,
      userRatingsCount: userRatingsCount + 1,
      avgScore: getNewAverage(userRatingsCount, avgScore, stars),
    };

    const rating = {
      ...recipe.rating,
      attributes,
    };

    const updatedRecipe = {
      ...recipe,
      rating,
      ratedByUser: stars,
    };

    const updatedRecipeList = [...trendingRecipes];
    updatedRecipeList[recipeIndex] = updatedRecipe;

    setTrendingRecipes(updatedRecipeList);
  };

  const handleStarStyles = (recipe: TrendingRecipe, starIndex: number) => {
    const baseStyle = styles.star;

    const starsBelongToCurrRecipe = recipe.document_id === hoveredStar.rowId;
    const starIsHovered = starIndex <= hoveredStar.idx;

    // if star is not a part of user rating
    if (recipe.ratedByUser && starIndex >= recipe.ratedByUser) {
      return baseStyle + ' ' + styles.disabledStar;
    }

    const starIsPartOfUserRating = recipe.ratedByUser && starIndex < recipe.ratedByUser;

    if ((starsBelongToCurrRecipe && starIsHovered) || starIsPartOfUserRating) {
      return baseStyle + ' ' + styles.filledStar;
    }

    return baseStyle;
  };

  return (
    <article>
      {trendingRecipes?.map((recipe, rIdx) => (
        <section key={recipe.document_id} className="container" style={{ position: 'relative' }}>
          <h4>{recipe.title}</h4>
          <span>Average Rating: {recipe.rating.attributes?.avgScore}</span>
          <span style={{ fontSize: '0.75rem' }}> ({recipe?.rating?.attributes?.userRatingsCount} users)</span>
          <div className={styles.starWrapper} style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-10px)' }}>
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star
                key={`star-${idx}`}
                onMouseEnter={() => setHoveredStar({ rowId: recipe.document_id, idx })}
                onMouseLeave={() => setHoveredStar({ rowId: -1, idx: -1 })}
                onClick={() => handleRating(recipe, rIdx, idx + 1)}
                className={handleStarStyles(recipe, idx)}
              />
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}
