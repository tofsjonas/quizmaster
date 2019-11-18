import React, { useContext } from 'react'
import { GameContext } from 'contexts/GameContext'
const GameTimer = () => {
  const { timer } = useContext(GameContext)

  return (
    <div className="GameTimer">
      <label>Time left: </label>
      <span className={'clock' + (timer <= 5 ? ' blink' : '')}>&nbsp;00:{timer.toString().padStart(2, '0')} </span>
    </div>
  )
}
export default GameTimer
