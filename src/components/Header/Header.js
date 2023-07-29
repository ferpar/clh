"use client";
import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { getString } from "../../helpers/i18n";

function Header() {
  const [scrolled, setScrolled] = React.useState(null);
  const checkScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);
  return (
    <header
      className={`${styles["site-header"]}`}
    >
      <div className={`${styles["wrapper"]} ${scrolled && styles["scrolled"]}`}>
        <a>
          <img
            src="/images/logo.webp"
            alt="CLH"
            className={`${styles["logo"]} ${scrolled && styles["logo-scrolled"]}`}
          />
        </a>
        <nav>
          <ul className={styles["header-nav-links"]}>
            <li className={styles["header-nav-link"]}>
              <Link href="/">{getString("HOME")}</Link>
            </li>
            <li className={styles["header-nav-link"]}>
              <Link href="/cursos">{getString("COURSES")}</Link>
            </li>
            <li className={styles["header-nav-link"]}>
              <Link href="/equipo">{getString("TEAM")}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
