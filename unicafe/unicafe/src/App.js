import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>
const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const StatisticLine = (props) => {
  if (props.text === "average"){
    let avg = 0
    avg = ((props.value[0] - props.value[2])/(props.value[0]+props.value[1]+props.value[2]))
    return (
      <div>{props.text} {avg}</div>
    )
  }
  if (props.text === "positive"){
    let posValue = 0
    posValue = ((props.value[0]/(props.value[0]+props.value[1]+props.value[2]) * 100) + "%")
    return (
      <div>{props.text} {posValue}</div>
    )
  }
  return (
    <div>
      {props.text} {props.value}
    </div>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <StatisticLine text="good" value ={props.goodValue} />
      <StatisticLine text="neutral" value ={props.neutralValue} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={props.allValue} />
      <StatisticLine text="average" value ={props.average} />
      <StatisticLine text="positive" value ={props.positive} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  if ((good || neutral || bad)=== 0){
    return(
      <div>
        <Header text="give feedback"/>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
        <Header text="statistics"/>
        <p>{"No feedback given."}</p>
      </div>
    )
    
  }

  return (
    <div>
      <Header text="give feedback"/>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header text="statistics"/>
      <Statistics goodValue={good} neutralValue={neutral} badValue={bad} allValue={good + neutral + bad} average={[good, neutral, bad]} positive={[good, neutral, bad]}/>
    </div>
  )
}

export default App