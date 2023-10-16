
function PokemonCard (props) {
  
  console.log(props)
  const pokemon = props.pokemon
  

  return ( 
    <>
    <figure>
    {pokemon.imgSrc === undefined ? <p>???</p> :
    <img src= {pokemon.imgSrc} alt="pokemon" />}
    </figure>
    <figcaption>{pokemon.name}</figcaption>
    
   </>
    
  );
 }


  export default PokemonCard


