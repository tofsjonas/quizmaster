import React, { createContext, useState } from 'react'
export const SettingsContext = createContext()

const SettingsContextProvider = ({ children }) => {
  const [category, setCategory] = useState(11)
  const [numberOfQuestions, setNumberOfQuestions] = useState(10)

  return <SettingsContext.Provider value={{ numberOfQuestions, setNumberOfQuestions, category, setCategory }}>{children}</SettingsContext.Provider>
}

export default SettingsContextProvider
