import styles from "../styles/navBar.module.css";
import { NavLink } from "./NavItem";
export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <NavLink linkName="About" id="1" />
        <NavLink linkName="Projects" id="2" />
        <NavLink linkName="Contact" id="3" />
      </ul>
    </nav>
  );
};
