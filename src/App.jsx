import { useState } from 'react'
import './App.css'
import PokemonApplication from './components/PokemonApplication'
import IntroPage from './pages/IntroPage'
import HomePage from './pages/HomePage'
import { Routes, Route, Link} from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<IntroPage/>}/>
        <Route path='/choosepokemon' element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default App
