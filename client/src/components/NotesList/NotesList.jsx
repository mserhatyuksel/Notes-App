import styles from "./NotesList.module.css";
const NotesList = ({ notes }) => {
  return (
    <div className="list">
      {notes.map((note) => {
        return (
          <div key={note.id} className={styles[`${note.color}`]}>
            <span>{note.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default NotesList;
