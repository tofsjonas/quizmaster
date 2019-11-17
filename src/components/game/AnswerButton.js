import React, { useContext, useState, useEffect, useRef, useMemo } from 'react'
const AnswerButton = ({ text, callback, disabled }) => {
  const handleClick = params => {
    callback(text)
  }
  return (
    <button disabled={disabled} onClick={handleClick} className="AnswerButton">
      {text}
    </button>
  )
}
export default AnswerButton
