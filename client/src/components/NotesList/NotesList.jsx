import { useSelector, useDispatch } from "react-redux";
import { selectFilteredNotes, removeNote } from "../../redux/notes/notesSlice";
import styles from "./NotesList.module.css";
const NotesList = () => {
  const dispatch = useDispatch();
  const notes = useSelector(selectFilteredNotes);

  return (
    <div className={styles["grid-container"]}>
      {notes.map((note) => {
        return (
          <div
            key={note.id}
            className={`${styles[`${note.color}`]} ${styles.note} ${
              styles["grid-item"]
            }`}
          >
            <p>{note.text}</p>
            <button onClick={() => dispatch(removeNote(note.id))}>X</button>
          </div>
        );
      })}
    </div>
  );
};

export default NotesList;
