import styles from "../styles/navBar.module.css";
import { NavLink } from "./NavItem";
export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <NavLink linkName="About" />
        <NavLink linkName="Projects" />
        <NavLink linkName="Contact" />
      </ul>
    </nav>
  );
};
