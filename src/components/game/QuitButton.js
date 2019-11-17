import React, { useContext, useState, useEffect, useRef, useMemo } from 'react'
import { GameContext } from 'contexts/GameContext'
const QuitButton = () => {
  const { resetGame } = useContext(GameContext)

  // confirmation is a bad idea
  // const handleClick = () => {
  //   if(window.confirm('Are you sure')){
  //     resetGame()
  //   }
  // }

  return (
    <button onClick={resetGame} className="QuitButton button">
      Quit
    </button>
  )
}
export default QuitButton
