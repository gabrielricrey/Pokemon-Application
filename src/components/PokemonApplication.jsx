import { useEffect, useState } from "react"
import Pokemon from "./Pokemon"

let PokemonApplication = () => {

    let [pokemons, setPokemons] = useState(null);
    let [index, setIndex] = useState("0");
    let [pokemon, setPokemon] = useState(null);
    let [show,setShow] = useState(true);

    useEffect(() => {
        let getData = async () => {
            let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
            let json = await response.json();
            setPokemons(json);
        }

        getData();
    }, [])

    async function getPokemon(i) {
        let response = await fetch(pokemons.results[i].url)
        let json = await response.json();
        setPokemon(json);

    }

    let toggleShow = () => {
        setShow(!show);
    }



    return (
        <>
            <div className={show ? "" : "hide"}>
                <select id="pokemons" onChange={(e) => setIndex(e.target.value)}>
                    {pokemons && pokemons.results.map((pokemon, i) => <option key={i} value={i}> {pokemon.name}</option>)}
                </select>
                <button onClick={() => {getPokemon(index); toggleShow() }}> Get Info</button>
            </div>

            {pokemon && <div className={show ? "hide" : ""}><Pokemon {...pokemon} toggleShow={toggleShow}/></div>}


        </>
    )
}

export default PokemonApplication