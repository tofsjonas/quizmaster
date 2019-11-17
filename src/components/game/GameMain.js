import React, { useContext, useState, useEffect, useRef, useMemo } from 'react'
import AnswerButton from './AnswerButton'
const GameMain = () => {
  const handleClick = text => {
    console.log('SPACETAG: GameMain.js', text)
  }

  return (
    <div className="GameMain">
      <div className="Question raised">What is your favourite colour?</div>
      <div className="Answers">
        <AnswerButton text="Blue" callback={handleClick} />
        <AnswerButton disabled={true} text="Red" callback={handleClick} />
        <AnswerButton text="Green" callback={handleClick} />
        <AnswerButton disabled={true} text="Yellow" callback={handleClick} />
      </div>
    </div>
  )
}
export default GameMain
