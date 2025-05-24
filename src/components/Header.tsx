import { memo } from 'react'
import Logo from '../assets/investment-calculator-logo.png'

const Header = () => {
  return (
    <header id="header">
      <img
        src={Logo}
        alt="Logo showing a money bag"
      />
      <h1>Investment Calculator</h1>
    </header>
  )
}

export default memo(Header)
