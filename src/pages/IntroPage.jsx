import { Link } from 'react-router-dom'
import image from '../images/pokeball.png'
import image1 from '../images/7.png'

const IntroPage = () => {

    return (
        <div className='container'>
            {/* <h1>Pokemon App</h1> */}
            <img src={image1} alt="" className='titleimage'/>
            <img src={image} className='pokeball'/>
            <p>- Get info about a certain Pokémon</p>
            <button><Link to="/choosepokemon">Get Started</Link></button>
        </div>
    )
}

export default IntroPage