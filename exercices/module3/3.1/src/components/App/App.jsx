import { useState } from 'react'
import './App.css'
import Button from 'components/Button/Button'
import Statistics from 'components/Statistics/Statistics'
import Loading from 'components/Loading/Loading'


const Header = (props) => {
  return (
    <h1> {props.title} </h1>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [loading, setLoading] = useState(true)
  // setTimeout(setLoading(loading), 3000)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const handleNeutalClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  const handleLoadingTrueOrFalse = () => {
    const updatedLoading = false
    setTimeout(() => {
      setLoading(updatedLoading);
    }, 3000)
  }

  if (loading == true) {
    handleLoadingTrueOrFalse();
    return (
      <div>
        <Loading />
      </div>
    )
  }


  return (
    <div>
      <Header title={"give feedback"} />

      <Button handleClick={handleGoodClick} title={"good"} />
      <Button handleClick={handleNeutalClick} title={"neutral"} />
      <Button handleClick={handleBadClick} title={"bad"} />

      <Header title={"statistics"} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )

}

export default App
