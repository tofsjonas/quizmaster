import React from 'react'
import SettingsContextProvider from './contexts/SettingsContext'
import GameContextProvider from 'contexts/GameContext'
import Main from 'Main'
import Header from './components/Header'
import Footer from 'components/Footer'

function App() {
  return (
    <SettingsContextProvider>
      <GameContextProvider>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </GameContextProvider>
    </SettingsContextProvider>
  )
}

export default App
