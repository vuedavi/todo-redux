import React from "react";

import styles from "../styles";

type props = {
  children: React.ReactNode,
  action?: any
}
export function Button({children, action} : props){
  return(
    <button className={styles.button.buttonClass} onClick={action} >
      {children}
    </button>
  )
}