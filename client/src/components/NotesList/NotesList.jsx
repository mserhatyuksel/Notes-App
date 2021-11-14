import styles from "./NotesList.module.css";
const NotesList = ({ notes }) => {
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
            {note.text}
          </div>
        );
      })}
    </div>
  );
};

export default NotesList;
