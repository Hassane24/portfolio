import { useEffect, useState } from "react";
import styles from "../styles/landingPage.module.css";
export const LandingPage = ({ name }: { name: string }) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => setAnimate(true), []);
  return (
    <section className={styles.container} data-name={name}>
      <span className={`${styles.name} ${animate ? styles.animate : ""}`}>
        Hassane Ben
      </span>
      <span className={`${styles.occupation} ${animate ? styles.animate : ""}`}>
        Front-End Web Developer
      </span>
    </section>
  );
};
