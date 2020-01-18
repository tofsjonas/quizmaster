import React, { useContext, useEffect, useRef } from 'react'
import { GameContext } from 'contexts/GameContext'
const CountDown = () => {
  const { counter, dispatch } = useContext(GameContext)
  var interval = useRef()

  useEffect(() => {
    interval.current = setInterval(function() {
      dispatch({ type: 'COUNT_DOWN' })
    }, 300)
    return () => {
      clearInterval(interval.current)
    }
  }, [dispatch])

  return (
    <div className="CountDown">
      {counter === 3 && <div>Ready...</div>}
      {counter === 2 && <div>Set...</div>}
      {counter === 1 && <div>Go!</div>}
      <div className="counter">{counter}</div>
    </div>
  )
}
export default CountDown
