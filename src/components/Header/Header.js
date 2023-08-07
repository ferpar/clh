"use client";
import React from "react";
import styles from "./Header.module.css";
import headerLinks from "./headerLinks";
import TopNav from "./TopNav";
import Hamburger from "../Hamburger";
import SideNav from "./SideNav";

function Header({ path }) {
  const [scrolled, setScrolled] = React.useState(null);
  const [currentPath, setCurrentPath] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const checkScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // this is to detect change of url when using the top nav
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

  // this is to detect change of url when using the back button
  const updatePath = () => {
    setCurrentPath(window.location.pathname);
  };

  React.useEffect(() => {
    // add event listener to detect change of url
    window.addEventListener("popstate", updatePath);

    return () => {
      window.removeEventListener("popstate", updatePath);
    }
  }, []);

  // consolidating the path to be used in the header
  // when rendering on the server, use the path from the request headers
  const actualPath = currentPath ? currentPath : path;
  const darkTheme = headerLinks.find(
    (link) => link.path === actualPath
  )?.darkTheme;

  return (
    <>
      <div
        className={
          `${styles["wrapper"]} ` +
          `${darkTheme ? styles["dark-theme"] : ""} ` +
          `${(scrolled || isOpen) ? styles["scrolled"] : ""}`
        }
      >
        <a href="/">
          <img
            src="/images/logo.webp"
            alt="CLH"
            className={`${styles["logo"]} ${
              (scrolled && !isOpen) && styles["logo-scrolled"]
            }`}
          />
        </a>
        <TopNav actualPath={actualPath} handlePathChange={handlePathChange} />
        <Hamburger darkTheme={darkTheme && !scrolled} hide={true} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <SideNav
        actualPath={actualPath}
        handlePathChange={handlePathChange}
        isOpen={isOpen}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}

export default Header;
