import { useState } from "react";
import styles from "../styles/navBar.module.css";
export const NavLink = ({ linkName, id }: { linkName: string; id: string }) => {
  const [hovered, setHovered] = useState(false);
  const showLinkName = () => setHovered(true);
  const hideLinkName = () => setHovered(false);

  return (
    <a href={`#${linkName}`} id={id} className={styles.listitem}>
      <li
        onMouseEnter={showLinkName}
        className={`${styles.link} ${hovered ? styles.hide : ""}`}
      >
        {linkName}
      </li>
      <div
        onMouseLeave={hideLinkName}
        className={`${styles.link_name} ${hovered ? styles.show : ""}`}
      >
        {linkName}
      </div>
    </a>
  );
};
