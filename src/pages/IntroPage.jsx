import { Link } from 'react-router-dom'
import image from '../images/pokeball.png'

const IntroPage = () => {

    return (
        <div className='container'>
            <h1>Pokemon App</h1>
            <p>Get info about a certain Pokemon</p>
            <img src={image}/>
            <button><Link to="/choosepokemon">Get Started</Link></button>
        </div>
    )
}

export default IntroPage