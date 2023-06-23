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

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  console.log(votes)
  const handleSelect = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVotes = () => {
    const arr = [...votes]
    arr[selected] += 1
    setVotes(arr)
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button handleSubmit={handleGood} text="good" />
      <Button handleSubmit={handleNeutral} text="neutral" />
      <Button handleSubmit={handleBad} text="bad"/>
      <Statistics title="statistics" good={good} neutral={neutral} bad={bad} total={total} />
      
      <h1>Anecedote of the day</h1> 
      <p>{anecdotes[selected]} has {votes[selected]} votes</p>
      <button onClick={handleVotes}>Vote</button>
      <button onClick={handleSelect}>Next Quote</button>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[votes.indexOf(Math.max(...votes))]} has {Math.max(...votes)} votes.</p>
    </>
  )
}

export default App