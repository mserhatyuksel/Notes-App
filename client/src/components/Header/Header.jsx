import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>NotesApp</h1>
      <input className={styles.search} type="text" placeholder="Search..." />
    </header>
  );
};

export default Header;
