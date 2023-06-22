const Header = ({ course }) => {
    return (
        <h1>{course}</h1>
    )
}

const Content = ({ parts }) => {
    return (
        <>
            {/* <ul>
                {parts.map(part => {
                    <li>{part.name}</li>
                })}
            </ul> */}
            <ul>
                <li>{parts[0].name}</li>
                <li>{parts[1].name}</li>
                <li>{parts[2].name}</li>
            </ul> 
        </>
    )
}

const Total = ({ parts }) => {
    let total = 0;
    parts.map(part => total += part.exercises)    
    return (
        <div>{total}</div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
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
            },
        ]
    }
  
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default App