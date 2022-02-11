import { Head } from "./components/Head";
import { ItemsContainer } from "./components/ItemsContainer";
import styles from "./styles";
function App() {
  return (
    <div className={styles.app.appClass}>
      <div className={styles.app.containerClass}>
        <Head />
        <ItemsContainer/>
      </div>
    </div>
  );
}

export default App;
