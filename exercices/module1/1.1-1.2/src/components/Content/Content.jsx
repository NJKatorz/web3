import Part from "components/Part/Part"

const Content = ({
    part1,
    exercice1,
    part2,
    exercice2,
    part3,
    exercice3
}) => {
    return (
        <div>
        <p>
          <Part part={part1} exercice={exercice1}/>
        </p>  
        <p>
          <Part part={part2} exercice={exercice2}/>
        </p>
        <p>
          <Part part={part3} exercice={exercice3}/>
        </p> 
        </div>
      )
}


export default Content