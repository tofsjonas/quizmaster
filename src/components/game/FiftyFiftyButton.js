import React, { useContext, useState, useEffect, useRef, useMemo } from 'react'
import { GameContext } from 'contexts/GameContext'
const FiftyFiftyButton = () => {
  const { fifty_fifty, dispatch } = useContext(GameContext)
  const handleClick = () => {
    if (fifty_fifty) {
      dispatch({ type: 'USE_FIFTY_FIFTY' })
    }
  }
  return (
    <button disabled={fifty_fifty ? false : true} className="FiftyFiftyButton" onClick={handleClick}>
      50/50
    </button>
  )
}
export default FiftyFiftyButton
