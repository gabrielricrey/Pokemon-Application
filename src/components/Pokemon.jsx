
let Pokemon = ({name,sprites,types,height,weight}) => {

    return (

        <div className="pokemon-card">
            <img src={sprites.front_default}/>
            <h4>{name}</h4>
            <h4>Type: {types[0].type.name}</h4>
            <h4>Height: {height}</h4>
            <h4>Weight: {weight}</h4>
        </div>
    )
}

export default Pokemon