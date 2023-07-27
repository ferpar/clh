import Image from "next/image";
import styles from "./page.module.css";
import { getString } from "../helpers/i18n";

export const metadata = {
  title: "Inicio | Centro León Hebreo",
  description: "Bienvenid@ a la web del Centro León Hebreo",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles["hero"]}>
        <div>
          <h3>{getString("TITLE")}
          <br/>
          <p className={styles["subtitle"]}>{getString("SUBTITLE")}</p>
          </h3>
          <p>{getString('WELCOME')}</p>
          <br/>
          <p>{getString("DESCRIPTION")}</p>
        </div>
      </section>
      <section className={styles["about"]}>
        <div>
          <h3>{getString("TITLE")}</h3>
          <p>{getString("ABOUT")}</p>
        </div>
      </section>
      <section className={styles["highlighted"]}>
        <h3>{getString("LIGHTHOUSE")}</h3>
        <p>{getString("LIGHTHOUSE_DESCRIPTION")}</p>
      </section>
      <section className={styles["activities"]}>
        <p>{getString("ACTIVITIES")}</p>
      </section>
      <section className={styles["triptic"]}>
        <div>
          <p>
            <strong>{getString("OUR_NAME")}</strong>
          </p>
          <p>{getString("OUR_NAME_DESC1")}</p>
          <p>{getString("OUR_NAME_DESC2")}</p>
          <p>{getString("OUR_NAME_DESC3")}</p>
        </div>
        <div>
          <p>
            <strong>{getString("OUR_PROJECT")}</strong>
          </p>
          <p>{getString("OUR_PROJECT_DESC")}</p>
        </div>
        <div>
          <p>
            <strong>{getString("OUR_MOTIVATION")}</strong>
          </p>
          <p>{getString("OUR_MOTIVATION_DESC1")}</p>
          <p>{getString("OUR_MOTIVATION_DESC2")}</p>
        </div>
      </section>
      <section className={styles["team"]}>
        <h3>{getString("TEAM")}</h3>
        <p>{getString("TEAM_ENDORSEMENT")}</p>
      </section>
    </main>
  );
}
