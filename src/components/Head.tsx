import styles from "../styles"

import { Button } from "./Button"
import { Input } from "./Input"

import { useDispatch } from "react-redux";
import { addItemOnTodo, updateInputValue, useTodo } from "../store/Slices/todo";


export function Head(){
  const dispatch = useDispatch()

  const input = useTodo('inputValue')

  function handleAddItemOnTodo(){
    if(Boolean(input)){
      dispatch(addItemOnTodo({title: input, id: Date.now()}))
      dispatch(updateInputValue(''))
    }
  }
  return (
    <div className={styles.head.headClass}>
      <Input/>
      <Button action={handleAddItemOnTodo}>
        Adicionar
      </Button>
    </div>
  )
}