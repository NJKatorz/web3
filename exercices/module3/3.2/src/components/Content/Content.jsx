import Part from "components/Part/Part"

const Content = ({parts}) => {
 // const { parts } = props
    return (
      <div>
      {parts.map((part) => (<Part name={part.name} exercises={part.exercises} key={part.id}  /> ))} 
     </div>
      )
}

export default Content