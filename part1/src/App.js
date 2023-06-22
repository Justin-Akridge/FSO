import { useState } from "react"

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

const Class = () => {
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

const Hello = ({ name, age }) => {

    const bornYear = () => new Date().getFullYear() - age;

    return (
        <div>
            <p>
                Hello {name}, you are {age} years old
                Your age is probably {bornYear()}
            </p>
        </div>
    )
}
  
const Display = ({count}) => <div>{count}</div>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                The app is used by pressing buttons
            </div>
        )
    }
    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const App = () => {
    const [right, setRight] = useState(0)
    const [left, setLeft] = useState(0)
    const [allClicks, setAll] = useState([])
    const [total, setTotal] = useState(0)

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        const updateleft = left + 1
        setLeft(updateleft)
        setTotal(updateleft + right)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        const updateright = right + 1
        setRight(updateright)
        setTotal(left + updateright)
    }

    const [word, setWord] = useState('')
   
    const hello = (name) => {
        const handle = () => {
            if (word === "") {
                setWord(name)
            } else {
                setWord("")
            }
        }
        return handle
    }
    return (
        <>
            {left}

            <Button handleClick={handleLeftClick} text='Left' />
            <Button handleClick={handleRightClick} text='Right' />
            {right}
            <History allClicks={allClicks} />
            <p>total {total}</p>
            <p>{word}</p>
            <Button handleClick={hello("justin")} text='word' />
        </>
    )
}
export default App