
let Pokemon = ({ name, sprites, types, height, weight, toggleShow }) => {

    return (
        <div className="container">
            <div className="pokemon-card">
                <div className="image-div">
                    <img src={sprites.front_default} />
                </div>
                    <p className="name">{name}</p>
                <div className="info-div">
                    <p>Type: {types[0].type.name}</p>
                    <p>Height: {height}</p>
                    <p>Weight: {weight}</p>
                </div>
            </div>
            <button onClick={toggleShow}>Back</button>
        </div>
    )
}

export default Pokemon