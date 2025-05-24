import { calculateInvestmentResults } from '../util/investment'

const Results = ({ userInput }) => {
  const resultData = calculateInvestmentResults(userInput)
  console.log('resultData', resultData)
  return <div>Results</div>
}

export default Results
