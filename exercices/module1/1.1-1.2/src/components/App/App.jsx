import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from 'components/Header/Header';
import Content from 'components/Content/Content';
import Total from 'components/Total/Total';


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercice1={exercises1} part2={part2} exercice2={exercises2} part3={part3} exercice3={exercises3} />
      <Total exercice1={exercises1} exercice2={exercises2} exercice3={exercises3} />
    </div>

    /**   <div>
     <Header {...{ course }} />
     <Content
       {...{ part1, exercises1, part2, exercises2, part3, exercises3 }}
     />
     <Total {...{ exercises1, exercises2, exercises3 }} />
   </div>
    */
  )
}


export default App
