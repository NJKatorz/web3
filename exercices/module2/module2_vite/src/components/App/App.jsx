import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'components/Button/Button'
import Display from 'components/Display/Display'
import useLocalStorage from 'hooks/useLocalStorage'

const STORAGE_COUNTER_KEY = "counter";

const App = () => {

  // const [counter, setCounter] = useState(JSON.parse(localStorage.getItem("counter")))
  const [counter, setCounter] = useLocalStorage(STORAGE_COUNTER_KEY, 0);
  console.log('rendering with counter value', counter)

  const changeCount = (delta) => {
    if (delta > 0) {
      console.log('increasing, value before', counter)
    } else if (delta < 0) {
      console.log('decreasing, value before', counter)
    } else {
      console.log('resetting to zero, value before', counter)
    }
    setCounter(counter + delta)
  }

  return (
    <div>
      <Display counter={counter} />
      <Button changeCount={changeCount} text="plus" delta={1}/>
      <Button changeCount={changeCount} text="zero" delta={-counter}/>
      <Button changeCount={changeCount} text="minus" delta={-1}/>
    </div>
  )
}


export default App
