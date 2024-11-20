import { useState } from 'react'
import './App.css'
import PokemonApplication from './components/PokemonApplication'

function App() {

  let [startApp, getStartApp] = useState(false);


  return (
    <>
      <div className='container'>
        <h1>Pokemon App</h1>
        <button onClick={() => getStartApp(!startApp)}>{!startApp ? "Start App" : "Close App"}</button>
        {startApp && <PokemonApplication />}
      </div>
    </>
  )
}

export default App
