"use client";
import React from "react";
import { NavContext } from "../NavContext";
import styles from "./Footer.module.css";
import Link from "next/link";
import { getString } from "../../helpers/i18n";

const footerLinks = [
  {
    name: "LEGAL",
    path: "/aviso-legal",
  },
  {
    name: "PRIVACY",
    path: "/politica-de-privacidad",
  },
  {
    name: "COOKIES",
    path: "/configuracion-de-cookies",
  },
];

function Footer() {
  const { setCurrentPath } = React.useContext(NavContext);

  const handlePathChange = (newURL) => {
    setCurrentPath(newURL);
  };

  return (
    <footer className={styles["site-footer"]}>
      <nav>
        <ul className={styles["footer-nav-links"]}>
          {footerLinks.map((link) => (
            <li key={link.name} className={`${styles["footer-nav-link"]}`}>
              <Link
                href={link.path}
                onClick={() => handlePathChange(link.path)}
              >
                {getString(link.name)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
