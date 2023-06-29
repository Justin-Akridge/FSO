import useState from 'react'

import Note from "./components/Note";

const App = (props) => {

  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('add new note..')
  const [showAll, setShowAll] = useState(true)


  const notesToShow = showAll ? notes : notes.filter(note => note.important === 1)
  console.log(notesToShow)
  const addNote = (event) => {
    event.preventDefault()
    console.log(event.target)
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1
    }
    setNotes(notes.concat(noteObject))
    setNewNote("..")
  }

  const handleNoteChange = (e) => {
    setNewNote(e.target.value)
  }
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <Note key={note.id} note={note.content} /> )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App;