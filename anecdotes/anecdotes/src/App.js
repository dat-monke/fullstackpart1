import { useState } from 'react'

const Header = (props) => <h2> {props.header} </h2>
const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>
const Display = (anecdotes) => <div>{anecdotes.anecdotes[anecdotes.selected]}</div>
const VoteDisplay = (props) => <div>has {props.votes[props.arrayID]} votes</div>
const HighestVotes = (props) => <div>has {props.arrayID()} votes</div>
const MostVotes = (props) => <div>{props.anecdotes[props.selected()]}</div>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const storageArray = new Array(8).fill(0)
  const [votes, setVotes] = useState(storageArray)
  let selection = Math.floor(Math.random() * 8)

  return (
    <div>
      <Header header="Anecdote of the day"/>
      <Display anecdotes={anecdotes} selected={selected}/>
      <VoteDisplay votes={votes} arrayID={selected}/>
      <Button handleClick={() => {
        const copyArray = [...votes]
        copyArray[selected] += 1
        return setVotes(copyArray)
      }} text="vote" />
      <Button handleClick={() => setSelected(selection)} text="next anecdote"/>
      <Header header="Anecdote with most votes"/>
      <MostVotes anecdotes={anecdotes} selected={() => {
        const anecdoteIndex = votes.indexOf(Math.max(...votes))
        return anecdoteIndex
      }}/>
      <HighestVotes arrayID={() => {
        return Math.max(...votes)
      }} />
    </div>
  )
}
export default App