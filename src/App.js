const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Parts = ({ name, exercise }) => {
  return(
    <>
      <p>{name} {exercise}</p>
    </>
  )
}

const Content = ({parts}) => {
  return(
    <>
      <Parts name={parts[0].name} exercise={parts[0].exercises} />
      <Parts name={parts[1].name} exercise={parts[1].exercises} />
      <Parts name={parts[2].name} exercise={parts[2].exercises} />
    </> 
  )
}


const Total = ({parts}) => {
  let total = 0
  for (let i=0; i<parts.length; i++) {
    total+=parts[i].exercises
  } 
  return(
    <p>total is {total}</p> 
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ] 
  
  
  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>       
      <Total parts={parts} />
    </div>
  )
}

export default App