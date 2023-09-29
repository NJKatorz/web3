import { useState } from 'react'
import Button from 'components/Button/Button'
import StatisticLine from './StatisticLine'


const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const average =  total !== 0 ? (props.good - props.bad) / total : 0
  const positive = total !== 0 ? (props.good / total) * 100 : 0
  if (total === 0){
    return (
      <diV> 
        No feedback given
      </diV>
    )
  }
  return (
    <div> 
      <table>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>   
      <StatisticLine text="all" value={total}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={positive}/>
      </table>
    </div>
  )
}

export default Statistics
