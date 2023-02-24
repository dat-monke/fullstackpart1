const Header = (props) => {
  console.log(props)
  return (
    <div> 
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const courseInfo = [
    {part:'Fundamentals of React', exercise: 10},
    {part:'Using props to pass data', exercise: 7},
    {part:'State of a component', exercise: 14},
  ]

  return (
    <div>
      <Header course={course} />
      <Content part={courseInfo[0].part} exercises={courseInfo[0].exercise} />
    </div>
  )
}

export default App