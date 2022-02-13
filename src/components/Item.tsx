import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { findTask, removeItemOnTodo } from "../store/Slices/todo";
import styles from "../styles";
type props = {
  children: React.ReactNode;
  id: number;
};
export function Item({ children, id }: props) {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  return (
    <div className={styles.itemContainer.itemClass}>
      <div className={styles.itemContainer.itemTextClass}>{children}</div>
      <button onClick={()=>{
        dispatch(findTask(id))
        navigate(`/${id}`)
      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <button onClick={() => dispatch(removeItemOnTodo(id))}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
}
