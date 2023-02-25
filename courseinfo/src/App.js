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
        <p>{props.part[0]} {props.exercise[0]}</p>
        <p>{props.part[1]} {props.exercise[1]}</p>
        <p>{props.part[2]} {props.exercise[2]}</p>
    </div>
  )
}

const Footer = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.values[0] + props.values[1] + props.values[2]}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course} />
      <Content part={[part1, part2, part3]} exercise={[exercises1, exercises2, exercises3]}/>
      <Footer values={[exercises1, exercises2, exercises3]}/>
    </>
  )
}

export default App