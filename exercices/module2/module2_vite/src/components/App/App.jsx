import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'components/Button/Button'
import Display from 'components/Display/Display'
import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)

  const changeCount = (delta) => {
    if (delta > 0) {
      console.log('increasing, value before', counter)
      setCounter(counter + delta)
    } else if (delta < 0) {
      console.log('decreasing, value before', counter)
      setCounter(counter - delta)
    } else {
      console.log('resetting to zero, value before', counter)
      setCounter(0)
    }
  }

  return (
    <div>
      <Display counter={counter} />
      <Button changeCount={changeCount} text="plus" delta={2}/>
      <Button changeCount={changeCount} text="zero" delta={0}/>
      <Button changeCount={changeCount} text="minus" delta={-1}/>
    </div>
  )
}


export default App
