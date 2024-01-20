import styles from "./styles.module.css";
export default function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <div className={styles.logoTopRow}>
        <div className={styles.logoDashes} />
        <span className={styles.logoSmallText}>AMERICA&#39;S</span>
        <div className={styles.logoDashes} />
      </div>
      <span className={styles.logoTallText}>TREND KITCHEN</span>
    </div>
  )
}