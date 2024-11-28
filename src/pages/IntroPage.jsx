import image from '../images/pokeball.png'
import image1 from '../images/7.png'
import { useNavigate } from 'react-router-dom'

const IntroPage = () => {

    let navigate = useNavigate();

    return (
        <div className='container'>
            <img src={image1} alt="" className='titleimage'/>
            <p>- Get info about a certain Pokémon</p>
            <img src={image} className='pokeball'/>
            <button onClick={() => navigate('/choosepokemon')}>Get Started</button>
        </div>
    )
}

export default IntroPage