import axios from 'axios';

class PokemonsDataService {
  getAllPokemons() {
    return axios.get('https://pokeapi.co/api/v2/pokemon');
  }
  getAllPokemonsWithUrls() {
    let customPokemons = [];
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        let pokemonsResponse = response.data.results;
        for (let pokey of pokemonsResponse) {
          let image = '';
          axios
            .get(pokey.url)
            .then((response) => {
              image = response.data.sprites.front_default;
              // console.log(image);
              customPokemons.push({ name: pokey.name, image: image });
            })
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
    // console.log(customPokemons);
    return customPokemons;
  }
  getPokemonByName(name) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}

export default new PokemonsDataService();
