import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>
const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>
// const Display = (props) => <div>{props.response} {props.value}</div>

const Statistics = (props) => {
  if (!(props.average === 0)){
    console.log(props.average)
    // let sum = 0
    // for (let i = 0; i < props.average.length; i++){
    //   sum += props.average[i]
    // }
    // console.log(sum)
  }
  // if (!(props.positive = null)){
  //   console.log(props.positive)
  // }
  return (
    <div>{props.response} {props.value}</div>
  )
}
  
  


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
      <Statistics response="good" value={good}/>
      <Statistics response="neutral" value={neutral}/>
      <Statistics response="bad" value={bad}/>
      <Statistics response="all" value={good + neutral + bad}/> 
      <Statistics response="average" average={[good, neutral, bad]}/>
      {/* <Display response="positive" positive={[good, neutral, bad]}/> */}
    </div>
  )
}

export default App