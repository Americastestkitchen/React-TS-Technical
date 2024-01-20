import { useCookies } from 'react-cookie';
import styles from './styles.module.css';

export default function Greeting() {
  const [cookies] = useCookies(['user']);

  return (
    <article className={styles.wrapper}>
      {cookies.user ? (
        <div>
          <h4 className={styles.userGreeting}>Hi {cookies.user},</h4>
          <p className={styles.instructions}>You can now rate the recipes below</p>
        </div>
      ) : (
        <p className={styles.warning}>**Sign In above to rate today&#39;s popular recipes**</p>
      )}
    </article>
  );
}
