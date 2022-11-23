<script>
import pokemonCard from "./components/pokemonCard.vue";

export default {
  components: {
    pokemonCard,
  },

  data() {
    return {
      url: "https://pokeapi.co/api/v2/pokemon",
      totalPokemons: [],
      pokemonsArray: [],
    };
  },

  computed: {
    //metodo para obtener pokemones
    async getPokemons() {
      try {
        const response = await fetch(this.url);
        const data = await response.json();
        this.totalPokemons = data.results;

        //se recorre el arreglo del total de pokemones
        for (let i = 0; i < this.totalPokemons.length; i++) {
          const responseSpecific = await fetch(this.totalPokemons[i].url);
          const dataSpecific = await responseSpecific.json();

          //se crea arreglo de pokemones con sus características
          this.pokemonsArray.push({
            name: dataSpecific.name,
            imgUrl: dataSpecific.sprites.other.dream_world.front_default,
            xp: dataSpecific.base_experience,
            attack: dataSpecific.abilities[0].ability.name,
            height: dataSpecific.height,
            moves: dataSpecific.moves.length,
            abilities: dataSpecific.abilities,
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.getPokemons;
  },
};
</script>

<template>
  <header>
    <div class="backRed"></div>
    <div class="backWhite"></div>
    <img class="pokemonTitle" src="/imgs/pokemonTitle.png" />
  </header>

  <body>
    <div class="container-fluid m-0 p-0 d-flex flex-column align-items-center">
      <pokemonCard :pokemonsArray="this.pokemonsArray"></pokemonCard>
    </div>
  </body>
</template>

<style lang="scss">
@import "src/assets/main.scss";
</style>
