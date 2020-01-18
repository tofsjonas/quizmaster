import React, { useContext } from 'react'
import { GameContext } from 'contexts/GameContext'
import Hr from 'components/Hr'
const Header = () => {
  const { counter, questions } = useContext(GameContext)

  return (
    counter === 0 &&
    questions.length === 0 && (
      <header>
        <h1 className="raised">
          Quiz
          <wbr />
          Master
        </h1>
        <Hr />
      </header>
    )
  )
}
export default Header
