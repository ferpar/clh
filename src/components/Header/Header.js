"use client";
import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { getString } from "../../helpers/i18n";

const headerLinks = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "COURSES",
    path: "/cursos",
  },
  {
    name: "TEAM",
    path: "/equipo",
  },
]

function Header({ path }) {
  const [scrolled, setScrolled] = React.useState(null);
  const [currentPath, setCurrentPath] = React.useState(null);

  const checkScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handlePathChange = (newURL) => {
    setCurrentPath(newURL);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  React.useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const actualPath = currentPath ? currentPath : path;

  return (
    <header className={`${styles["site-header"]}`}>
      <div className={`${styles["wrapper"]} ${scrolled && styles["scrolled"]}`}>
        <a>
          <img
            src="/images/logo.webp"
            alt="CLH"
            className={`${styles["logo"]} ${
              scrolled && styles["logo-scrolled"]
            }`}
          />
        </a>
        <nav>
          <ul className={styles["header-nav-links"]}>
            {headerLinks.map((link) => (
              <li
                key={link.name}
                className={`${styles["header-nav-link"]} ${
                  actualPath === link.path ? styles["active"] : ""
                }`}
              >
                <Link href={link.path} onClick={() => handlePathChange(link.path)}>
                  {getString(link.name)}
                </Link>
                </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
