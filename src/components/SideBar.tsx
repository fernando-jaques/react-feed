import styles from "./SideBar.module.css";
import { PencilLine } from "phosphor-react";

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/3082010?v=4"
        />

        <strong>Fernando Jaques</strong>
        <span>Software Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={18} />
          Edit profile
        </a>
      </footer>
    </aside>
  );
}
