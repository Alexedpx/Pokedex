import PropTypes from 'prop-types';


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

 PokemonCard.propTypes = {
    pokemonList: PropTypes.shape ({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  })
}

  export default PokemonCard


