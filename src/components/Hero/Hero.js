import { getString } from "../../helpers/i18n";
import styles from "./Hero.module.css";

const title = getString("TITLE");
const subtitle = getString("SUBTITLE");
const welcome = getString("WELCOME");
const description = getString("DESCRIPTION");

export default function Hero() {
    return (
      <section className={styles["hero"]}>
        <div>
          <h3>{title}
          <br/>
          <p className={styles["subtitle"]}>{subtitle}</p>
          </h3>
          <p>{welcome}</p>
          <br/>
          <p>{description}</p>
        </div>
      </section>
    )
}