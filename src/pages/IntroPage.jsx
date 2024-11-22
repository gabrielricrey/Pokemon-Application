import { Link } from 'react-router-dom'

const IntroPage = () => {

    return (
        <>
            <h1>Pokemon App</h1>
            <button><Link to="/choosepokemon">Start App</Link></button>
        </>
    )
}

export default IntroPage