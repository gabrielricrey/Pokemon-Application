
let Pokemon = ({name,sprites,types,height,weight}) => {


    return (

        <>

            <h3>{name}</h3>
            <img src={sprites.front_default}/>
            <h4>Type: {types[0].type.name}</h4>
            <h4>Height: {height}</h4>
            <h4>Weight: {weight}</h4>
    
        </>
    )
}

export default Pokemon