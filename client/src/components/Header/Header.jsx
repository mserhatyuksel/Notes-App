import styles from "./Header.module.css";
const Header = ({ changeFilter }) => {

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>NotesApp</h1>
      <input
        className={styles.search}
        type="text"
        placeholder="Search..."
        onChange={(e) => changeFilter(e.target.value)}
      />
    </header>
  );
};

export default Header;
