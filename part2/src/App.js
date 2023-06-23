const Note = ({ note }) => {
    return (
        <li>{note.content}</li>
    )
}

const App = (props) => {
    const { notes } = props
    
    return (
        <>
            <h1>Notes</h1>
            <ul>
                <Note key={note.id} {note.content} />
            </ul>
        </>
    )
    
}

export default App