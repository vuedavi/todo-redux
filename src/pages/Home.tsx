import { Head } from "../components/Head";
import { ItemsContainer } from "../components/ItemsContainer";
import styles from "../styles";
export function Home() {
  return (
    <div className={styles.app.appClass}>
      <div className={styles.app.containerClass}>
        <Head />
        <ItemsContainer/>
      </div>
    </div>
  );
}


