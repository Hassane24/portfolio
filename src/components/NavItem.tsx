import { useState } from "react";
import styles from "../styles/navBar.module.css";
export const NavLink = ({ linkName }: { linkName: string }) => {
  const [hovered, setHovered] = useState(false);
  const showLinkName = () => setHovered(true);
  const hideLinkName = () => setHovered(false);

  return (
    <a
      href={`#${linkName}`}
      className={styles.listitem}
      onMouseEnter={showLinkName}
      onMouseLeave={hideLinkName}
    >
      <li className={`${styles.link} ${hovered ? styles.hide : ""}`}>
        {linkName}
      </li>
      <div className={`${styles.link_name} ${hovered ? styles.show : ""}`}>
        {linkName}
      </div>
    </a>
  );
};
