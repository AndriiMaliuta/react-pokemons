import axios from 'axios';

class PokemonsDataService {
  getAllPokemons() {
    return axios.get('https://pokeapi.co/api/v2/pokemon');
  }
}

export default new PokemonsDataService();
