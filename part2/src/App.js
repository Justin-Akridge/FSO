const Course = ({ course, parts }) => {
    const total = parts.reduce((s, p) => (s + p.exercises), 0) 

    return (
        <>
            <h2>{course}</h2> 
            <ul>
                {parts.map(part => {
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
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
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
                }
            ]
        }, 
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]
  
    return (
        <>
            <h1>Web development curriculum</h1>
            {courses.map(course => {
                return (
                    <Course key={course.id} course={course.name} parts={course.parts} />
                )
            })} 
        </>
    )
  }
  
  export default App