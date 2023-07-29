import styles from "./Highlight.module.css";
import { getString } from "../../helpers/i18n";

function Highlight() {
  return (
    <section className={styles["highlight"]}>
      <div className={styles["wrapper"]}>
        <h3>{getString("LIGHTHOUSE")}</h3>
        <img src="/images/lighthouse.webp" alt="Lighthouse" />
        <p>{getString("LIGHTHOUSE_DESCRIPTION1")}</p>
        <p>{getString("LIGHTHOUSE_DESCRIPTION2")}</p>
      </div>
    </section>
  );
}

export default Highlight;
