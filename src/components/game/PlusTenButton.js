import React, { useContext, useState, useEffect, useRef, useMemo } from 'react'
import { GameContext } from 'contexts/GameContext'
const PlusTenButton = () => {
  const { plus_ten, dispatch } = useContext(GameContext)
  const handleClick = () => {
    if (plus_ten) {
      dispatch({ type: 'ADD_TEN_SECONDS' })
    }
  }

  return (
    <button disabled={plus_ten ? false : true} className="PlusTenButton" onClick={handleClick}>
      +10 sec
    </button>
  )
}
export default PlusTenButton
