import { useState } from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from './components/Results'

export interface UserInputType {
  initialInvestment: number
  annualInvestment: number
  expectedReturn: number
  duration: number
}

const App = () => {
  const [userInput, setUserInput] = useState<UserInputType>({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  const handleChange = (inputIdentifier: string, newValue: number | string) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: +newValue,
      }
    })
  }

  const inputIsValid = userInput.duration >= 1

  return (
    <>
      <Header />
      <UserInput
        handleChange={handleChange}
        userInput={userInput}
      />
      {inputIsValid ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than zero</p>
      )}
    </>
  )
}

export default App
