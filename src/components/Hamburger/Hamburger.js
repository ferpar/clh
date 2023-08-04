"use client";
import React from "react";
import styles from "./Hamburger.module.css";

// Hamburger component
// hide: boolean to hide the hamburger @ vp width > 800px
export default function Hamburger({ hide = false, isOpen, setIsOpen }) {
  return (
    <div
      className={
        `${styles["hamburger"]} ` +
        `${isOpen ? styles["open"] : ""} ` +
        `${hide ? styles["hide"] : ""}`
      }
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className={styles["line"]} />
      <span className={styles["line"]} />
      <span className={styles["line"]} />
    </div>
  );
}
