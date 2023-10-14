const Person = ({ name, number, deleteButton }) => {
    const handleDeleteClick = e => {
        e.preventDefault()
        deleteButton({name, number})
      }
    
    return (
        <div key={name}> {name} {number} <button onClick={handleDeleteClick}> delete </button> </div> 
    )
}

export default Person