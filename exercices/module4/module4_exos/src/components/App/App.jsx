import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState, useEffect } from 'react'
import Person from 'components/Person/Person'
import PersonsAPI from '../../services/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')



  const handlePersonNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePersonNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const initialPersons = () => {
    PersonsAPI.getAll().then(person => {
      setPersons(person)
    })
  }

  useEffect(initialPersons, [])

  // adding personne
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    if (persons.find(({ name }) => name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return;
    }
    /** 
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
    z*/

    PersonsAPI.createPerson(newPerson).then(() => {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    })
  }

  const deletePerson = (person) => {
    const confirmed = window.confirm("Are you sure ? ")
    if (!confirmed) return
    PersonsAPI
      .deletePerson(person)
      .then(() => setPersons(persons.filter(listItem => listItem.id !== person.id)))

  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonNameChange} />
        </div>
        <div>number: <input value={newNumber} onChange={handlePersonNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <Person name={person.name} number={person.number} deleteButton={deletePerson} />
      )}
    </div>
  )
}

export default App