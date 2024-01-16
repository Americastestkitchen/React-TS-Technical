import { useState } from "react";
import { useCookies } from "react-cookie";
import Logo from "./Logo";
import styles from "./styles.module.css";

export default function Header() {
  const [cookies, setCookie] = useCookies(["user", "recipes"]);
  const [name, setName] = useState<string>("")
  const [fieldIsVisible, setFieldIsVisible] = useState<boolean>(false);
  const [showValidation, setShowValidation] = useState<boolean>(false);

  const handleClick = () => {
    if (!fieldIsVisible && cookies.user) {
      setName("");
      setCookie("user", "");
      setCookie("recipes", [])
    }
    if (!fieldIsVisible && !cookies.user) {
      setShowValidation(false)
      setFieldIsVisible(true);
    }
    if (fieldIsVisible && !cookies.user && name) {
      setShowValidation(false);
      setFieldIsVisible(false);
      setCookie("user", name);
    }
    if (fieldIsVisible && !cookies.user && !name) {
      setShowValidation(true)
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.maxWidth}>
        <div className={styles.logoTitleGroup}>
          <Logo />
          <h1 className={styles.title}>Rate Today&#39;s Trending Recipes</h1>
        </div>
        <div className={`${styles.inputLoginGroup} ${fieldIsVisible ? styles.loginWithField : styles.loginButtonOnly}`}>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${styles.input} ${showValidation ? styles.redPlaceholder : ""}`}
            placeholder="Enter a name here ... ie: John Dough"
          />
          <button className={styles.login} onClick={() => handleClick()}>{cookies.user ? "Sign Out" : "Sign In"}</button>
        </div>
      </div>
    </header>
  )
}