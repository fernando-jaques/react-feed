import { Cpu } from "phosphor-react";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/3082010?v=4"
          />

          <div className={styles.authorInfo}>
            <strong>Fernando Jaques</strong>
            <span>Software Developer</span>
          </div>
        </div>

        <time title="27 July at 18:00:00" dateTime="2022-07-11 18:00:00 ">
          Publish at 1h ago
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          incidunt ipsam molestias obcaecati vel. Nesciunt non tempore facere
          pariatur ex libero nam, quia ea fugiat obcaecati, sed atque, assumenda
          quod?
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          fugiat nesciunt labore dolor est ea voluptatibus optio perspiciatis
          aperiam, delectus, quo culpa! In eum inventore perferendis blanditiis
          obcaecati earum corrupti?
        </p>

        <p>
          <a href="https://www.instagram.com/fernando.o.jaques/">
            👉 Instagram
          </a>
        </p>

        <p>
          <a href="#">#react #css modules #typescript</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave a comment</strong>

        <textarea placeholder="Write a comment..." />

        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
