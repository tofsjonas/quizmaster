import React, { useContext } from 'react'
import { GameContext } from 'contexts/GameContext'
const PlusTenButton = () => {
  const { plusTen, dispatch } = useContext(GameContext)
  const handleClick = () => {
    dispatch({ type: 'TIMER_PLUSTEN' })
  }

  return (
    <button disabled={plusTen === -1 ? false : true} className="PlusTenButton" onClick={handleClick}>
      +10s
    </button>
  )
}
export default PlusTenButton
