import { useState } from "react";
import styles from "../styles/mediaScroller.module.css";
import { About } from "./About";
import { Contanct } from "./Contact";
import { LandingPage } from "./LandingPage";
import { Projects } from "./Projects";
import { ScrollerDot } from "./ScorllerDot";

const pages = ["First Page", "About me", "Projects", "Contact"];

export const MediaScroller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === pages.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? pages.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <main className={styles.media_scroller}>
      <LandingPage name="First Page" />
      <About name="About me" />
      <Projects name="Projects" />
      <Contanct name="Contact" />

      <div className={styles.next_arrow} onClick={handleNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          viewBox="0 96 960 960"
          width="30"
        >
          <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
        </svg>
        <div>
          {pages.length - 1 === currentIndex
            ? pages[0]
            : pages[currentIndex + 1]}
        </div>
      </div>

      <div className={styles.prev_arrow} onClick={handlePrevious}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          viewBox="0 96 960 960"
          width="30"
        >
          <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
        </svg>
        <div>
          {currentIndex === 0
            ? pages[pages.length - 1]
            : pages[currentIndex - 1]}
        </div>
      </div>

      <div className={styles.dots_container}>
        {pages.map((page, index) => (
          <div key={index}>
            <ScrollerDot
              onThatDot={index === currentIndex ? true : false}
              pageName={page}
              clickHandler={() => handleDotClick(index)}
            />
          </div>
        ))}
      </div>
    </main>
  );
};
