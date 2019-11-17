import React, { useContext, useState, useEffect, useRef, useMemo } from 'react'
import Hr from 'components/Hr'
import GameHeader from 'components/game/GameHeader'
import GameMain from 'components/game/GameMain'
import LifeLines from 'components/game/LifeLines'
import QuitButton from 'components/game/QuitButton'
import { GameContext } from 'contexts/GameContext'
const Game = () => {
  const { counter, questions } = useContext(GameContext)
  return (
    counter === 0 &&
    questions.length > 0 && (
      <div className="Game">
        <QuitButton />
        <GameHeader />
        <Hr />
        <GameMain />
        <Hr />
        <LifeLines />
      </div>
    )
  )
}
export default Game
