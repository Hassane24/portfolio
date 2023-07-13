import styles from "./App.module.css";
import { LandingPage } from "./components/LandingPage";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <LandingPage />
    </div>
  );
}

export default App;
