"use client";
import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { getString } from "../../helpers/i18n";

const headerLinks = [
  {
    name: "HOME",
    path: "/",
    darkTheme: false,
  },
  {
    name: "COURSES",
    path: "/cursos",
    darkTheme: true,
  },
  {
    name: "TEAM",
    path: "/equipo",
    darkTheme: false,
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

  // consolidating the path to be used in the header
  // when rendering on the server, use the path from the request headers 
  const actualPath = currentPath ? currentPath : path;
  console.log(actualPath);
  const darkTheme = headerLinks.find((link) => link.path === actualPath)?.darkTheme;

  console.log(darkTheme)
  return (
      <div className={`${styles["wrapper"]} ` 
      + `${darkTheme ? styles["dark-theme"] : ''} `
      + `${scrolled ? styles["scrolled"] : ''}`}>
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
  );
}

export default Header;
