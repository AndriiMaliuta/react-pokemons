import axios from 'axios';

class PokemonsDataService {
  getAllPokemons() {
    return axios.get('https://pokeapi.co/api/v2/pokemon');
  }
  getPokemonByName(name) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}

export default new PokemonsDataService();
