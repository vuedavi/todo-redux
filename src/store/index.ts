import { configureStore } from "@reduxjs/toolkit";
import Todo  from "./Slices/todo";

export const store = configureStore({
  reducer:{
    todo: Todo 
  }
})
