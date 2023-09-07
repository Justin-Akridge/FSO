import {useState} from "react"

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("add new note..");
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll 
    ? notes
    : notes.filter(note => note.important === true)

  const addNote = (e) => {
    e.preventDefault();
    const newNoteObject = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5,
    }
    setNotes(notes.concat(newNoteObject));
    setNewNote("");
  }

  const handleNoteChange = (e) => {
    console.log(e.target.value); 
    setNewNote(e.target.value);
  }

  const handleNoteClicked = () => {
    setNewNote("");
  }

  return (
    <>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Imporant" : "Show All"}
      </button>
      <ul>
        {notesToShow.map(note => {
          return (
            <li key={note.id}>{note.content}</li>
          )
        })}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange}
          onClick={handleNoteClicked}
        />
        <button type="submit">save</button>
      </form>
    </>
  )
}

export default App
