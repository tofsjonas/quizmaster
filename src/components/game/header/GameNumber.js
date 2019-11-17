import React, { useContext } from 'react'
import { GameContext } from 'contexts/GameContext'
const GameNumber = () => {
  const { current, questions } = useContext(GameContext)

  return (
    <div className="GameNumber">
      <label>Question:</label>
      <span>
        {current + 1}/{questions.length}
      </span>
    </div>
  )
}
export default GameNumber
