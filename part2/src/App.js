const Note = ({ note }) => {
    return (
        <li>{note}</li>
    )
}

const App = (props) => {
    const { notes } = props
    
    return (
        <>
            <h1>Notes</h1>
            <ul>
                {notes.map(note => 
                    <Note key={note.id} note={note.content} />
                )}
            </ul>
        </>
    )
    
}

export default App