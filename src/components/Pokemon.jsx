
let Pokemon = ({ name, sprites, types, height, weight, toggleShow }) => {

    return (
        <div className="container">
            <div className="pokemon-card">
                <div className="image-div">
                    <img src={sprites.front_default} />
                </div>
                    <h4 className="name">{name}</h4>
                <div className="info-div">
                    <h4>Type: {types[0].type.name}</h4>
                    <h4>Height: {height}</h4>
                    <h4>Weight: {weight}</h4>
                </div>
            </div>
            <button onClick={toggleShow}>Back</button>
        </div>
    )
}

export default Pokemon