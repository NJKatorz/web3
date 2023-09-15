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
          <Part part={part1} exercice={exercice1}/>
          <Part part={part2} exercice={exercice2}/>
          <Part part={part3} exercice={exercice3}/>
        </div>
      )
}

export default Content