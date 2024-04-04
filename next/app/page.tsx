import { TodoApp } from "./components/TodoApp";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.component}>
      <TodoApp />
    </main>
  );
}
