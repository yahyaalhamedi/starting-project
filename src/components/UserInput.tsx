import { UserInputType } from '../util/types'
import InputField from './InputField'

interface UserInputProps {
  handleChange: (field: string, value: string) => void
  userInput: UserInputType
}
const UserInput = ({ handleChange, userInput }: UserInputProps) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputField
          title="Initial Investment"
          value={userInput.initialInvestment}
          onChange={(event) => handleChange('initialInvestment', event.target.value)}
        />
        <InputField
          title="Annual Investment"
          value={userInput.annualInvestment}
          onChange={(event) => handleChange('annualInvestment', event.target.value)}
        />
      </div>
      <div className="input-group">
        <InputField
          title="Expected Return"
          value={userInput.expectedReturn}
          onChange={(event) => handleChange('expectedReturn', event.target.value)}
        />
        <InputField
          title="Duration"
          value={userInput.duration}
          onChange={(event) => handleChange('duration', event.target.value)}
        />
      </div>
    </section>
  )
}

export default UserInput
