import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/3082010?v=4" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fernando Jaques</strong>
              <time title="27 July at 18:00:00" dateTime="2022-07-11 18:00:00 ">
                2 hours ago
              </time>

              <div className={styles.comment}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat quidem quod eos, nulla esse earum ducimus dolore
                excepturi. Veritatis exercitationem deleniti harum distinctio
                odit optio blanditiis quod, molestiae officiis neque.
              </div>
            </div>

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
        </div>

        <footer>
          <button title="Like comment">
            <ThumbsUp size={20} />
            Like <span>7</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
