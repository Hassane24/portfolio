import { useEffect, useState } from "react";
import styles from "../styles/landingPage.module.css";
export const LandingPage = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => setAnimate(true), []);
  return (
    <div className={styles.container}>
      <span className={`${styles.name} ${animate ? styles.animate : ""}`}>
        Hassane Ben
      </span>
      <span className={`${styles.occupation} ${animate ? styles.animate : ""}`}>
        Front-End Web Developer
      </span>
    </div>
  );
};
