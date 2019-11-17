import React, { useContext } from 'react'
import { GameContext } from 'contexts/GameContext'
const FiftyFiftyButton = () => {
  const { fiftyFifty, dispatch } = useContext(GameContext)
  const handleClick = () => {
    dispatch({ type: 'USE_fiftyFifty' })
  }
  return (
    <button disabled={fiftyFifty === -1 ? false : true} className="FiftyFiftyButton" onClick={handleClick}>
      50/50
    </button>
  )
}
export default FiftyFiftyButton
