import { getString } from "../../helpers/i18n";
import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className={styles["about"]}>
      <div className={styles["wrapper"]}>
        <img
          src="/images/mosaic.webp"
          alt="bible"
          className={styles["about-img"]}
        />
        <div className={styles["text"]}>
          <h3>{getString("TITLE")}</h3>
          <p>{getString("ABOUT")}</p>
        </div>
      </div>
    </section>
  );
}
