import { useState } from "react";
import { TrendingRecipe, HoveredStar, RecipeCardProps } from "../../lib/types";
import Star from "./Star";

import styles from "./styles.module.css"

export default function RecipeCard({ recipe, recipeIndex, handleSetRating }: RecipeCardProps) {
  const [hoveredStar, setHoveredStar] = useState<HoveredStar>({ rowId: -1, idx: -1 });

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
    <section className={`${styles.recipeCard} container`}>
      <h4>{recipe.title}</h4>
      <span>Average Rating: {recipe.rating.attributes?.avgScore}</span>
      <span className={styles.userCount}> ({recipe?.rating?.attributes?.userRatingsCount} users)</span>
      <div className={styles.starWrapper}>
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star
            key={`star-${idx}`}
            onMouseEnter={() => setHoveredStar({ rowId: recipe.document_id, idx })}
            onMouseLeave={() => setHoveredStar({ rowId: -1, idx: -1 })}
            onClick={() => handleSetRating(recipe, recipeIndex, idx + 1)}
            className={handleStarStyles(recipe, idx)}
          />
        ))}
      </div>
    </section>
  )
}