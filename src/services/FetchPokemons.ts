import { pokemonSchema, Pokemon } from "../Pokemon";
import axios from "axios";

async function fetchPokemons(offset:number) {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&&offset=${offset}`);
    const responses = data.results.map((p:{name:string, url:string}) => {
        const response = axios.get(p.url);
        return response;
    });
    const results = await Promise.all(responses);
    const pokemons: Pokemon[] = results.map((r)=>{
        return pokemonSchema.parse(r.data);
    });
    return pokemons;
}
export default fetchPokemons;