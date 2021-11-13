import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NotesList from "./components/NotesList/NotesList";
import Textarea from "./components/Textarea";

function App() {
  const [notes, setNotes] = useState([
    { id: "1", text: "test1", color: "blue" },
  ]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    if (filter !== "") {
      const filtered = notes.filter((item) => item.text.includes(filter));
      setFilteredNotes(filtered);
    } else {
      setFilteredNotes(notes);
    }
  }, [filter, notes]);

  const addNote = (obj) => {
    setNotes([...notes, obj]);
  };

  const changeFilter = (text) => {
    setFilter(text);
  };
  return (
    <div className="container">
      <Header changeFilter={changeFilter} />
      <Textarea addNote={addNote} />
      <NotesList notes={filteredNotes} />
    </div>
  );
}

export default App;
