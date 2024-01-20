import { useMemo } from "react";
import primeFactorize from "../../lib/utils";
import styles from "./styles.module.css";

export default function Footer() {
  // As per the original tasks, this costly calculation is memoized.
  // I've repurposed the result as the "Total Recipes count"
  const arbitrarilyImportantNumber = useMemo(() => primeFactorize(1000000).length, []);

  return (
    <div className={styles.footer}>
      <span>Total Recipes (and counting): </span>
      <span className={styles.recipeCount}>{arbitrarilyImportantNumber}</span>
    </div>
  )
}