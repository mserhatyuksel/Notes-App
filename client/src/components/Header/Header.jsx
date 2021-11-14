import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/notes/notesSlice";
import styles from "./Header.module.css";
const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>NotesApp</h1>
      <input
        className={styles.search}
        type="text"
        placeholder="Search..."
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </header>
  );
};

export default Header;
