import { useState } from "react";
import styles from "../styles/mediaScroller.module.css";

interface ScrollerDotProps {
  onThatDot: boolean;
  pageName: string;
  clickHandler: () => void;
}

export const ScrollerDot = ({
  onThatDot,
  pageName,
  clickHandler,
}: ScrollerDotProps) => {
  const [hovered, setHovered] = useState(false);
  const showDotText = () => setHovered(true);
  const hideDotText = () => setHovered(false);
  return (
    <div
      className={styles.dot_container}
      onMouseLeave={hideDotText}
      onMouseEnter={showDotText}
    >
      <div
        onClick={clickHandler}
        className={`${styles.dot} ${onThatDot ? styles.fill_dot : ""}`}
      ></div>
      <div
        className={`${styles.dot_text} ${hovered ? styles.show_dot_text : ""}`}
      >
        {pageName}
      </div>
    </div>
  );
};
