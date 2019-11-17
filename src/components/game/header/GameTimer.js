import React, { useContext, useState, useEffect, useRef, useMemo } from 'react'
import { GameContext } from 'contexts/GameContext'
const GameTimer = () => {
  const { timer } = useContext(GameContext)

  return (
    <div className="GameTimer">
      <label>Time left:</label>
      <span className={'clock' + (timer <= 10 ? ' blink' : '')}>00:{timer}</span>
    </div>
  )
}
export default GameTimer
