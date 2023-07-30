import styles from "./page.module.css";
import { getString } from "../../helpers/i18n";
import Highlighted from "@/components/Highlighted";

export default function Courses() {
  return (
    <main className={styles.main}>
      <Highlighted />
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
