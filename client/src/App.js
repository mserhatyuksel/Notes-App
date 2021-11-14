import "./App.css";
import Header from "./components/Header";
import NotesList from "./components/NotesList/NotesList";
import Textarea from "./components/Textarea";

function App() {
  return (
    <div className="container">
      <Header  />
      <Textarea />
      <NotesList />
    </div>
  );
}

export default App;
