import React, { createContext, useState } from 'react'
export const SettingsContext = createContext()

const SettingsContextProvider = ({ children }) => {
  const [category, setCategory] = useState(10)
  const [numberOfQuestions, setNumberOfQuestions] = useState(2)

  return <SettingsContext.Provider value={{ numberOfQuestions, setNumberOfQuestions, category, setCategory }}>{children}</SettingsContext.Provider>
}

export default SettingsContextProvider
