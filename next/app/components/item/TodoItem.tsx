import { TodoCheckbox } from "./TodoCheckbox";
import { TodoDeleteButton } from "./TodoDeleteButton";
import styles from "./TodoItem.module.css";
import { TodoText } from "./TodoText";

interface Props {
  todo: string;
  id: string;
  done?: boolean;
}

export function TodoItem(props: Props) {
  return (
    <form>
      <div className={styles.component}>
        <div className={styles.checkbox}>
          <TodoCheckbox done={props.done} />
        </div>

        <div className={styles.text}>
          <TodoText todo={props.todo} done={props.done} todoId={props.id} />
        </div>

        <div className={styles.button}>
          <TodoDeleteButton todoId={props.id} />
        </div>
      </div>
    </form>
  );
}
