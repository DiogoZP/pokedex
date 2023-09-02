import PokemonCard from "../../components/PokemonCard";
import fetchPokemons from "../../services/FetchPokemons";
import { Pokemon } from "../../Pokemon";
import { useState, useEffect } from "react";



function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const buscarPokemons = async () => {
      const results = await fetchPokemons(pokemons.length);
      setPokemons(
        p => p.concat(results)
      );
    }
  useEffect(() => {
    buscarPokemons();
  },[]);
  return (
    <>
     <header className="w-full bg-red-600 justify-start items-center flex p-2">
      <h1 className="text-white font-extrabold text-2xl">Pokédex</h1>
     </header>
     <div className="bg-gray-200 grid grid-cols-1 p-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
      {pokemons.map((pokemon) => <PokemonCard numero={pokemon.numero} nome={pokemon.nome} tipos={pokemon.tipos} sprite={pokemon.sprite}/>)}
     </div>
     <div className="flex justify-center items-center w-full pb-2 bg-gray-200">
      <button className="bg-red-600 text-white font-bold p-2 rounded-xl" onClick={()=>{buscarPokemons()}}>Carregar mais</button>
     </div>
    </>
  )
}

export default App
