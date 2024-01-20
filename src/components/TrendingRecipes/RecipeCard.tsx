import { useCookies } from "react-cookie";
import { useState } from "react";
import { HoveredStar, RecipeCardProps, RecipeCookie } from "../../lib/types";
import Star from "./Star";

import styles from "./styles.module.css"

export default function RecipeCard({ recipe, recipeIndex, handleSetRating }: RecipeCardProps) {
  const [cookies] = useCookies(["user"]);
  const [hoveredStar, setHoveredStar] = useState<HoveredStar>({ rowId: -1, idx: -1 });

  const handleStarStyles = (recipe: RecipeCookie, starIndex: number) => {
    const baseStyle = styles.star;

    if (!cookies.user) return baseStyle + ' ' + styles.disabledStar;

    const starsBelongToCurrRecipe = recipe.documentId === hoveredStar.rowId;
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
    <section className={styles.recipeCard}>
      {recipe.img &&
        <div className={styles.imgWrapper}>
          <img src={recipe.img} alt={recipe.title} className={styles.img} />
        </div>
      }
      <h4 className={styles.title}>{recipe.title}</h4>
      <div className={styles.ratingWrapper}>
        <span>Rating: {recipe.avgScore}</span>
        <span className={styles.userCount}> ({recipe.userRatingsCount} users)</span>
      </div>
      <div className={styles.starWrapper}>
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star
            key={`star-${idx}`}
            onMouseEnter={() => setHoveredStar({ rowId: recipe.documentId, idx })}
            onMouseLeave={() => setHoveredStar({ rowId: -1, idx: -1 })}
            onClick={() => handleSetRating(recipe, recipeIndex, idx + 1)}
            className={handleStarStyles(recipe, idx)}
          />
        ))}
      </div>
    </section>
  )
}