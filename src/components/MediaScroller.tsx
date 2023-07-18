import { useEffect, useRef, useState } from "react";
import styles from "../styles/mediaScroller.module.css";
import { About } from "./About";
import { Contanct } from "./Contact";
import { LandingPage } from "./LandingPage";
import { Projects } from "./Projects";
import { ScrollerDot } from "./ScorllerDot";

const pages = ["Home", "About me", "Projects", "Contact"];

export const MediaScroller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pagesRef = useRef<NodeListOf<Element> | null>(null);
  useEffect(() => {
    const appDiv = document.querySelector("div#root > div") as HTMLElement;
    pagesRef.current = document.querySelectorAll("section");
    const navLis = document.querySelectorAll("nav > ul > a");
    navLis.forEach((navLi) => {
      const index = parseInt(navLi.id);
      navLi.addEventListener("click", () => setCurrentIndex(index));
    });
    const handleScroll = () => {
      const pageXOffset = Math.round(appDiv.scrollLeft);
      let newActiveSection = 0;

      pagesRef.current?.forEach((section) => {
        const sectionOffsetLeft = (section as HTMLElement).offsetLeft;
        const sectionWidth = (section as HTMLElement).offsetWidth;

        if (
          pageXOffset >= sectionOffsetLeft &&
          pageXOffset < sectionOffsetLeft + sectionWidth
        )
          newActiveSection = parseInt(
            section.getAttribute("data-number") as string
          );
      });

      setCurrentIndex(newActiveSection);
    };
    const position = { left: 0, x: 0 };
    const mouseDownHandler = function (e: MouseEvent) {
      position.left = appDiv.scrollLeft;
      position.x = e.clientX;
      appDiv.style.cursor = "grabbing";
      appDiv.style.userSelect = "none";
      appDiv.addEventListener("mousemove", mouseMoveHandler);
      appDiv.addEventListener("mouseup", mouseUpHandler);
    };

    const mouseMoveHandler = function (e: MouseEvent) {
      // How far the mouse has been moved
      const dx = e.clientX - position.x;
      // Scroll the element
      appDiv.scrollLeft = position.left - dx;
    };

    const mouseUpHandler = function () {
      appDiv.removeEventListener("mousemove", mouseMoveHandler);
      appDiv.removeEventListener("mouseup", mouseUpHandler);
      appDiv.style.cursor = "default";
      appDiv.style.removeProperty("user-select");
    };

    appDiv.addEventListener("scroll", handleScroll);
    appDiv.addEventListener("mousedown", mouseDownHandler);
    return () => appDiv.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNext = () => {
    const updatedIndex =
      currentIndex + 1 === pages.length ? 0 : currentIndex + 1;

    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === pages.length ? 0 : prevIndex + 1
    );
    pagesRef.current?.forEach((page) => {
      const pageNumber = parseInt(page.getAttribute("data-number") as string);
      if (updatedIndex === pageNumber)
        return updatedIndex === pageNumber
          ? page.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "center",
            })
          : null;
    });
  };

  const handlePrevious = () => {
    const updatedIndex =
      currentIndex - 1 < 0 ? pages.length - 1 : currentIndex - 1;

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? pages.length - 1 : prevIndex - 1
    );
    pagesRef.current?.forEach((page) => {
      const pageNumber = parseInt(page.getAttribute("data-number") as string);
      return updatedIndex === pageNumber
        ? page.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "center",
          })
        : null;
    });
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    pagesRef.current?.forEach((page) => {
      const pageNumber = parseInt(page.getAttribute("data-number") as string);
      return index === pageNumber
        ? page.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "center",
          })
        : null;
    });
  };

  return (
    <main className={styles.media_scroller}>
      <LandingPage name="Home" />
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
        <div className={styles.page_name}>
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
        <div className={styles.page_name}>
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
