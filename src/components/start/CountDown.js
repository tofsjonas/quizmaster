import React, { useContext, useState, useEffect, useRef, useMemo } from 'react'
import { GameContext } from 'contexts/GameContext'
const CountDown = () => {
  const { counter, questions, dispatch } = useContext(GameContext)

  useEffect(() => {
    if (counter === 0) return
    setTimeout(() => {
      dispatch({ type: 'COUNT_DOWN' })
    }, 200)
  }, [counter])
  return (
    counter > 0 &&
    questions.length === 0 && (
      <div className="CountDown">
        {counter === 3 && <div>Ready...</div>}
        {counter === 2 && <div>Set...</div>}
        {counter === 1 && <div>Go!</div>}
        <div className="counter">{counter}</div>
      </div>
    )
  )
}
export default CountDown
