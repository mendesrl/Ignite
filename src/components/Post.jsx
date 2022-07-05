import { Avatar } from "./Avatar";
import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar />
          <div className={styles.authorInfo}>
            <strong>Jeank</strong>
            <span>Editor</span>
          </div>
        </div>

        <time title="01 de Maio as 08:13h" dateTime="2022-05-01">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa 👋 </p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀{" "}
        </p>

        <p>
          <a href="#">jane.design/doctorcare </a>
        </p>

        <p style={{display:'flex'}}>
          <a href="#">#novoprojeto </a>
          <a href="#">#nlw </a>
          <a href="#">#rocketseat </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentario" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}