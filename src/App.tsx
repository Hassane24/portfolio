import styles from "./App.module.css";
import { MediaScroller } from "./components/MediaScroller";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <MediaScroller />
    </div>
  );
}

export default App;
