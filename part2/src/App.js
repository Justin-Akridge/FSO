<<<<<<< HEAD
import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
    const [notes, setNotes] = useState(props.notes)  
    const [newNote, setNewNote] = useState('Type your note!') 
    const [showAll, setShowAll] = useState(true);

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            important: Math.random() < 0.5,
            id: notes.length + 1
        }
        setNotes(notes.concat(noteObject));
        setNewNote('')
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    const handleInputChange = (e) => {
        setNewNote('')
    }

    const notesToShow = showAll 
        ? notes
        : notes.filter(note => note.important === true)

=======
// const Course = ({ course, parts }) => {
//     const total = parts.reduce((s, p) => (s + p.exercises), 0) 

//     return (
//         <>
//             <h3>{course}</h3> 
//                 {parts.map(part => {
//                     return (
//                         <p key={part.id}>{part.name} {part.exercises}</p>
//                     )
//                 })}
//             <h4>Total number of exercises {total}</h4>
//         </>
//     )
// }

// const App = () => {
//     const courses = [
//         {
//             name: 'Half Stack application development',
//             id: 1,
//             parts: [
//                 {
//                     name: 'Fundamentals of React',
//                     exercises: 10,
//                     id: 1
//                 },
//                 {
//                     name: 'Using props to pass data',
//                     exercises: 7,
//                     id: 2
//                 },
//                 {
//                     name: 'State of a component',
//                     exercises: 14,
//                     id: 3
//                 },
//                 {
//                     name: 'Redux',
//                     exercises: 11,
//                     id: 4
//                 }
//             ]
//         }, 
//         {
//             name: 'Node.js',
//             id: 2,
//             parts: [
//                 {
//                     name: 'Routing',
//                     exercises: 3,
//                     id: 1
//                 },
//                 {
//                     name: 'Middlewares',
//                     exercises: 7,
//                     id: 2
//                 }
//             ]
//         }
//     ]
  
//     return (
//         <>
//             <h1>Web development curriculum</h1>
//             {courses.map(course => {
//                 return (
//                     <Course key={course.id} course={course.name} parts={course.parts} />
//                 )
//             })} 
//         </>
//     )
//   }
  
//   export default App

import {useState} from 'react'
import Note from './components/Note'

const App = (props) => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('new note...')

    const addNote = (e) => {
        e.preventDefault()
        const noteObject = {
            content: newNote,
            import: Math.random() < 0.5,
            id: notes.length + 1,
        }    

        setNotes(notes.concat(noteObject))
        setNewNote('')
    }
    const handleNoteChange = (e) => {
        e.preventDefault()
        setNewNote(e.target.value)
    }

>>>>>>> 4ebb6d48921a1488359eea99c45e7e2a55108c08
    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all' }
                </button>
            </div>
            <ul>
<<<<<<< HEAD
                {notesToShow.map(note => 
=======
                {notes.map(note => 
>>>>>>> 4ebb6d48921a1488359eea99c45e7e2a55108c08
                    <Note key={note.id} note={note} />
                )}
            </ul>
            <form onSubmit={addNote}>
<<<<<<< HEAD
                <input type='text' onFocus={handleInputChange} value={newNote} onChange={handleNoteChange}/>
                <button type='submit'>save</button>
=======
                <input value={newNote} onChange={handleNoteChange} />
                <button type='submit'>submit</button>
>>>>>>> 4ebb6d48921a1488359eea99c45e7e2a55108c08
            </form>
        </div>
    )
}

export default App 