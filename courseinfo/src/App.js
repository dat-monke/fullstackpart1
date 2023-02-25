const Header = (props) => {
  console.log(props)
  return (
    <div> 
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <p>{props.name} {props.number}</p>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part name={props.part[0]} number={props.number[0]}/>
      <Part name={props.part[1]} number={props.number[1]}/>
      <Part name={props.part[2]} number={props.number[2]}/>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part={[part1.name, part2.name, part3.name]} number={[part1.exercises, part2.exercises, part3.exercises]}/>
      <Footer values={[part1.exercises, part2.exercises, part3.exercises]} /> 
    </div>
  )
}

export default App