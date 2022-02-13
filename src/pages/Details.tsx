import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { useTodo } from "../store/Slices/todo";

import styles from "../styles";

export function Details() {
  const task = useTodo('detailsItem')
  const navigate = useNavigate()
  return (
    <div className={styles.details.detailsClass}>
      <div className={styles.details.containerClass}>
        <Button action={()=> navigate('/')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
        <div className={styles.details.task.taskContainerClass}>
          <h1 className={styles.details.task.idClass}>ID: {task.id}</h1>
          <p className={styles.details.task.taskClass}>{task.title}</p>
        </div>
      </div>
    </div>
  );
}
