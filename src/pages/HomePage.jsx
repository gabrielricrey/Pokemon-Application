import PokemonApplication from "../components/PokemonApplication";
import image1 from '../images/7.png'


const HomePage = () => {

    return (
        <div className="container">
            {/* <h2>Choose Pokemon</h2> */}
            <img src={image1} alt="" className='titleimage'/>
            
            <PokemonApplication/>
        </div>
    )
}

export default HomePage;