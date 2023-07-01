import { useState } from 'react'

const App = () => {
  const [contacts, setContact] = useState([]) 
  const [newContact, setNewContact] = useState('')
  const [newName, setNewName] = useState("..Add new name")
  const [newNumber, setNewNumber] = useState("...Add new number")

  const addContact = (event) => {
    event.preventDefault()
    const contactObject = {
      name: newName,
      number: newNumber,
      id: contacts.length + 1,
    }
    
    let isPresent = find_contact_in_list(contactObject.name, contactObject.number)
    if (isPresent[0] == false && isPresent[1] == false) {
      setContact(contacts.concat(contactObject))
      setNewContact('')
    }
  }

  const find_contact_in_list = (name, number) => {
    let namePresent = false;
    let numberPresent = false;
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].name == name) {
        namePresent = true;
      }
      if (contacts[i].number == number) {
        numberPresent = true;
      }
    }
    if (namePresent && numberPresent) {
      alert("Name and phone number is already taken")
    }
    else if (namePresent) {
      alert("Name is already taken")
    }
    else if (numberPresent) { 
      alert("Number is already taken")
    }  
    return [namePresent, numberPresent]
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const Contact = ({name, number}) => {
    return (
      <>
        <p>name: {name}</p>
        <p>number: {number}</p>
      </>
    )
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} required />
          number: <input value={newNumber} onChange={handleNumberChange} required />
        </div>
        <div>
          <button onClick={addContact} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {contacts.map(contact => {
          return (
            <Contact key={contact.id} name={contact.name} number={contact.number} />
          )
      })}
    </div>
  )
}

export default App
