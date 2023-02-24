const Header = (props) => {
  console.log(props)
  return (
    <div> 
      <h1>{props.course}</h1>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  return (
    <>
      <Header course={course} />
      {/* <Content/>
      <Footer/> */}
    </>
  )
}

export default App