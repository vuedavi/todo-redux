import styles from "../styles"
import { Button } from "./Button"
import { Input } from "./Input"
export function Head(){
  return (
    <div className={styles.head.headClass}>
      <Input/>
      <Button>
        Adicionar
      </Button>
    </div>
  )
}