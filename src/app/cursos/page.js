import styles from "./page.module.css";
import { getString } from "../../helpers/i18n";

export default function Courses() {
  return (
    <main className={styles.main}>
      <section className={styles["highlighted"]}>
        <div className={styles["img-wrapper"]}>
          <img src="/images/floralmotive.webp" alt="cover" />
        </div>
        <div className={styles["heading"]}>
          <div className={styles["heading-top"]}>
            <h1>{getString("COURSES")}</h1>
            <p>{getString("COURSE_INTRO")}</p>
            <h2>{getString("LIGHTHOUSE")}</h2>
            <p>{getString("LIGHTHOUSE_DESCRIPTION3")}</p>
          </div>
          <div className={styles["heading-bottom"]}>
            <p>{getString("LIGHTHOUSE_SYNOPSIS1")}</p>
            <p>{getString("LIGHTHOUSE_SYNOPSIS2")}</p>
          </div>
        </div>
      </section>
      <section className={styles["courses"]}>
        <h1>{getString("TITLE")}</h1>
        <ul>
          <li>
            <img src="/images/lighthouse2.webp" alt="lighthouse" />
            <h3>{getString("LIGHTHOUSE")}</h3>
            <p>
              ¿Te animas a conocer con nosotros la historia y la cultura del
              pueblo judío de Sefarad?
            </p>
            <p>
              Te ayudamos a acceder al conocimiento de una manera amena e
              intuitiva, mediante el enfoque del diálogo, siguiendo la didáctica
              establecida desde la antigüedad, y por el propio León Hebreo.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
