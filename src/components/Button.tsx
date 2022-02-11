import React from "react";
import { useDispatch } from "react-redux";
import { addItemOnTodo, updateInputValue, useTodo } from "../store/Slices/todo";
import styles from "../styles";

type props = {
  children: React.ReactNode
}
export function Button({children} : props){
  const dispatch = useDispatch()
  const input = useTodo('inputValue')
  function handleAddItemOnTodo(){
    if(!(input == '')){
      dispatch(addItemOnTodo({title: input, id: Date.now()}))
      dispatch(updateInputValue(''))
    }
  }
  return(
    <button className={styles.button.buttonClass} onClick={handleAddItemOnTodo}>
      {children}
    </button>
  )
}