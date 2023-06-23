const Course = ({ course }) => {
    const initialValue = 0
    const {parts} = course
    const total = course.parts.reduce((s, p) => (s + p.exercises), initialValue)

    return (
        <>
            <h1>{course.name}</h1> 
            <ul>
                {course.parts.map(part => {
                    return (
                        <li key={part.id}>{part.name} {part.exercises}</li>
                    )
                })}
            </ul>
            <h4>Total number of exercises {total}</h4>
        </>
    )
}
const App = () => {
    const course = {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
            name: 'Redux',
            exercises: 11,
            id: 4
        },
      ]
    }
  
    return (
        <Course course={course} />
    )
  }
  
  export default App