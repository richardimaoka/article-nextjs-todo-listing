import styles from "./TodoCheckbox.module.css";

interface Props {}

export function TodoCheckbox(props: Props) {
  return (
    <label className={styles.label}>
      <input type="checkbox" className={styles.checkbox} />
    </label>
  );
}