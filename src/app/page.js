import styles from "./page.module.css";
import { getString } from "../helpers/i18n";

import Hero from "../components/Hero";
import About from "../components/About";
import Highlight from "@/components/Highlight";
import Activities from "@/components/Activities";
import Triptic from "@/components/Triptic/Triptic";
import Team from "@/components/Team";

export const metadata = {
  title: "Inicio | Centro León Hebreo",
  description: "Bienvenid@ a la web del Centro León Hebreo",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Highlight />
      <Activities />
      <Triptic />
      <Team />
    </main>
  );
}
