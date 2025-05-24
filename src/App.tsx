import { useState } from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from './components/Results'
import { UserInputType } from './util/types'

const App = () => {
  const [userInput, setUserInput] = useState<UserInputType>({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  const handleChange = (inputIdentifier: string, newValue: string) => {
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
