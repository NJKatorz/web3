import axios from "axios"

const baseUrl = "//localhost:3001/persons"

const getAll = () => axios.get(baseUrl).then(response => response.data)
const createPerson = (person) => axios.post(baseUrl, person).then(response => response.data)
const deletePerson = (person_id) => axios.delete(`${baseUrl}/${person_id}`)
const updatePerson = (person, payload) => axios.put(`${baseUrl}/${person.id}`, payload).then(response => response.data)

const PersonsAPI = {
  getAll,
  createPerson,
  deletePerson,
  updatePerson
}

export default PersonsAPI