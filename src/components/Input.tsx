import { useDispatch } from "react-redux";
import { updateInputValue, useTodo } from "../store/Slices/todo";
import styles from "../styles";

export function Input(){
  const dispatch = useDispatch()
  return (
    <div className={styles.input.inputContainerClass}>
      <input type="text" className={styles.input.inputClass} value={useTodo('inputValue')} onChange={e=> dispatch(updateInputValue(e.target.value))}/>
    </div>
  )
}