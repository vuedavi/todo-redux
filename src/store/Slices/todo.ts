import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const Todo = createSlice({
  name: "todo",
  initialState: {
    todos: [
      {
        title: "BLA BLA BLA BLA BLA BLA",
        id: Date.now(),
      },
    ],
    inputValue: "",
    detailsItem: {}
  },
  reducers: {
    addItemOnTodo(state, action): any {
      state.todos.push(action.payload);
    },
    updateInputValue(state, action) {
      state.inputValue = action.payload;
    },
    removeItemOnTodo(state, action) {
      const getItem: any = state.todos.find((el) => el.id == action.payload);
      const getIndexByItem = state.todos.indexOf(getItem)
      state.todos.splice(getIndexByItem, 1)
    },
    findTask(state, action){
      const getItem: any = state.todos.find((el) => el.id == action.payload);
      state.detailsItem = getItem
    }
  },
});

export default Todo.reducer;
export const { addItemOnTodo, updateInputValue, removeItemOnTodo, findTask } =
  Todo.actions;

export function useTodo(val: string) {
  return useSelector((state: any) => state.todo[val]);
}