

function NavBar ({pokemonIndex, setpokemonIndex, pokemonListLength}) {
console.log()

return (
    

 <div> 
{pokemonIndex > 0 && (
<button onClick={() => setpokemonIndex (pokemonIndex -1)}>Précédent</button>
)}

{pokemonIndex < pokemonListLength - 1 && (
<button onClick={() => setpokemonIndex (pokemonIndex +1)}>Suivant</button>
)}
</div>  

)



}

export default NavBar