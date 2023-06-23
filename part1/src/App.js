import { useState } from 'react'



const Button = (props) => {
  return (
    <button onClick={props.handleSubmit}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  const {value, text} = props
  if (text === "positive") {
    return (
      <tr>
        <th>{text} </th>
        <td>{value}%</td>
      </tr>
    )
  } else if (text === "statistics") {
    return (
      <h1>{props.text}</h1>
    )
  } else {
    return (
      <tr>
        <th>{text} </th>
        <td>{value}</td>
      </tr>
    
    )
  }
}

const Statistics = (props) => {
  const {title, good, neutral, bad, total} = props
  if (total === 0) {
    return (
      <h4>No feedback given</h4>
    )
  } else {
    return (
      <>
        <StatisticLine text="statistics" />
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={good / total} />
            <StatisticLine text="positive" value={(good / total) * 100} />
          </tbody>
        </table>
      </>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    const update = good + 1
    setGood(update)
    setTotal(total + 1)
  }

  const handleNeutral = () => {
    const update = neutral + 1
    setNeutral(update)
    setTotal(total + 1)
  }

  const handleBad = () => {
    const update = bad + 1
    setBad(update)
    setTotal(total + 1)
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button handleSubmit={handleGood} text="good" />
      <Button handleSubmit={handleNeutral} text="neutral" />
      <Button handleSubmit={handleBad} text="bad"/>
      <Statistics title="statistics" good={good} neutral={neutral} bad={bad} total={total} />
      
    </>
  )
}

export default App