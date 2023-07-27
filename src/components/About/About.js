import { getString } from "../../helpers/i18n";
import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
    return (
      <section className={styles["about"]}>
        {/* <div className={styles["img-container"]}>
            <Image src="/images/mosaic.webp" alt="bible"  width={300} height={480}/>
        </div> */}
        <img src="/images/mosaic.webp" alt="bible" className={styles["about-img"]} />
        <div className={styles["text"]}>
          <h3>{getString("TITLE")}</h3>
          <p>{getString("ABOUT")}</p>
        </div>
      </section>
    )
}
