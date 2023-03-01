import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>
const Button = props => <button onClick={props.handleClick}>{props.text}</button>
const Display = props => <div>{props.response} {props.value}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback"/>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header text="statistics"/>
      <Display response="good" value={good}/>
      <Display response="neutral" value={neutral}/>
      <Display response="bad" value={bad}/>
      <Display response="all" value={good + neutral + bad}/> 
      <Display response="average" value={(good-bad)/(good+neutral+bad)}/>
      <Display response="positive" value={((good / (good+neutral+bad)) * 100) + "%"}/>
    </div>
  )
}

export default App