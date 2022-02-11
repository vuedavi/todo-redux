import { useTodo } from "../store/Slices/todo";
import styles from "../styles";
import { Item } from "./Item";


export function ItemsContainer() {
  return (
    <div className={styles.itemContainer.itemContainerClass}>
      {useTodo('todos').map((el : any) =>(<Item id={el.id} key={el.id}>
        {el.title}
      </Item>))}
    </div>
  );
}
