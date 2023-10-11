import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

function App () {
  
  const [pokemonIndex, setpokemonIndex] = useState(0);

  console.log(pokemonIndex)





  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    
    {

      name: "charmander",
  
      imgSrc:
  
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  
    },
  
    {
  
      name: "squirtle",
  
      imgSrc:
  
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  
    },
  
    {
  
      name: "pikachu",
  
      imgSrc:
  
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  
    },



    {
      name: "mew",
    },
  ];

  return (
    <>
    <p>{pokemonIndex}</p>
    
    {pokemonIndex > 0 && (
    <button onClick={() => setpokemonIndex (pokemonIndex -1)}>Précédent</button>
    )}
   
   {pokemonIndex < pokemonList.length - 1 && (
    <button onClick={() => setpokemonIndex (pokemonIndex +1)}>Suivant</button>
   )}
      
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </>
  );
}






export default App