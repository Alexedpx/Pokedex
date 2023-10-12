  /*
   <div> 
 
  {pokemonIndex > 0 && (
  <button onClick={() => setpokemonIndex (pokemonIndex -1)}>Précédent</button>
  )}
  
  {pokemonIndex < pokemonListLength - 1 && (
  <button onClick={() => setpokemonIndex (pokemonIndex +1)}>Suivant</button>
  )}  
  </div>  
  */

function NavBar ({pokemonIndex, setpokemonIndex, pokemonList}) {
  const handleList = (index) => {
   setpokemonIndex(index)
  }
  
  return (
    <div>
      
       {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => {handleList(index)}}>{pokemon.name}</button>
  
        ))}
    </div>
    );
  }
  
  export default NavBar