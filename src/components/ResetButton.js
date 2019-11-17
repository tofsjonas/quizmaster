import React, { useContext } from 'react'
import { GameContext } from 'contexts/GameContext'
const ResetButton = ({ text }) => {
  const { resetGame } = useContext(GameContext)

  // confirmation is a bad idea
  // const handleClick = () => {
  //   if(window.confirm('Are you sure')){
  //     resetGame()
  //   }
  // }

  return (
    <button onClick={resetGame} className="ResetButton button">
      {text}
    </button>
  )
}
export default ResetButton
