import React from 'react'
import GameTimer from './header/GameTimer'
import GameNumber from './header/GameNumber'
const GameHeader = () => {
  return (
    <div className="GameHeader">
      <GameNumber />
      <GameTimer />
    </div>
  )
}
export default GameHeader
