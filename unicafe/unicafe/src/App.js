import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>
const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Statistics = (props) => {
  if (props.response === "average"){
    let avg = 0
    avg = ((props.average[0] - props.average[2])/(props.average[0]+props.average[1]+props.average[2]))
    return (
      <div>{props.response} {avg}</div>
    )
  }
  if (props.response === "positive"){
    let posValue = 0
    posValue = ((props.positive[0]/(props.positive[0]+props.positive[1]+props.positive[2]) * 100) + "%")
    return (
      <div>{props.response} {posValue}</div>
    )
  }
  return (
    <div>{props.response} {props.value}</div>
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
      <Statistics response="good" value={good}/>
      <Statistics response="neutral" value={neutral}/>
      <Statistics response="bad" value={bad}/>
      <Statistics response="all" value={good + neutral + bad}/> 
      <Statistics response="average" average={[good, neutral, bad]}/>
      <Statistics response="positive" positive={[good, neutral, bad]}/>
    </div>
  )
}

export default App