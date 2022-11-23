<script>
export default {
  props: {
    pokemonsArray: Array,
  },

  data() {
    return {
      pokemonSelect: {},
    };
  },

  methods: {
    selectPokemon(pokemon) {
      this.pokemonSelect = pokemon;
    },
  },
};
</script>
    
<template>
  <div class="container m-0 p-3">
    <div class="row d-flex flex-wrap justify-content-between">
      <div
        class="col-lg-3 col-sm-6 col-6 m-0 p-lg-4 p-sm-3 p-3"
        v-for="pokemon in this.pokemonsArray"
        :key="pokemon.name"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="
          () => {
            selectPokemon(pokemon);
          }
        "
      >
        <section
          class="
            d-flex
            flex-column
            align-items-center
            justify-content-start
            bg-light
            p-3
            custom-card
          "
        >
          <div class="card-background"></div>
          <img :src="pokemon.imgUrl" class="img-fluid h-50 image-card" />
          <h4 class="card-title">{{ pokemon.name }}</h4>
          <div>
            <div class="card-info-one">
              <p><strong>Ataque principal: </strong>{{ pokemon.attack }}</p>
              <p><strong>XP base: </strong>{{ pokemon.xp }}</p>
              <p><strong>Altura: </strong>{{ pokemon.height }} decimetros</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="custom-modal">
        <div class="modal-header custom-header">
          <h1 class="modal-title fs-2" id="exampleModalLabel">
            {{ this.pokemonSelect.name }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body">
          <section
            class="d-flex flex-column align-items-center custom-modal-body"
          >
            <img
              :src="this.pokemonSelect.imgUrl"
              class="img-fluid modal-image"
            />
            <div class="modal-info d-flex flex-column px-5 py-3 mt-3">
              <p>
                <strong>Ataque principal: </strong
                >{{ this.pokemonSelect.attack }}
              </p>
              <p><strong>XP base: </strong>{{ this.pokemonSelect.xp }}</p>
              <p>
                <strong>Altura: </strong
                >{{ this.pokemonSelect.height }} decimetros
              </p>
              <p>
                <strong>Movimientos: </strong>{{ this.pokemonSelect.moves }}
              </p>
              <strong>Habilidades: </strong>
              <p
                v-for="eachAbility in this.pokemonSelect.abilities"
                :key="eachAbility"
              >
                {{ eachAbility.ability.name }}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
@import "src/assets/main.scss";

.custom-card {
  box-shadow: 0px 0px 5px $shadow;
  position: relative;
  overflow: hidden;
  height: 300px;
  border-radius: 20px;
  transition: all 0.5s linear;

  @media screen and (max-width: 600px) {
    height: 100%;
  }

  .card-background {
    position: absolute;
    background-color: $backgroundWhite;
    width: auto;
    height: 65%;
    top: 10px;
    right: 10px;
    left: 10px;
    margin: auto;
    border-radius: 15px;
    z-index: 1;
    transition: all 0.5s linear;
  }

  * {
    z-index: 5;
  }

  .image-card {
    margin: 35px 0px;
  }

  .card-title {
    background-color: $red;
    width: auto;
    color: $backgroundWhite;
    text-align: center;
    border-radius: 50px;
    padding: 5px 10%;
    margin: 10px 0px;
    transition: all 0.3s linear;
  }

  .card-info-one {
    visibility: hidden;
    opacity: 0;
    height: 0;
    transition: visibility 0.5s ease-in;
    transition: visibility 0.1s ease-out;
    transition: opacity 0.5s ease-in-out;
  }

  //hover solo en pantalla grande
  @media screen and (min-width: 600px) {
    &:hover {
      transform: scale(1.05);
      outline: 4px solid $red;

      .card-info-one {
        height: auto;
        width: fit-content;
        visibility: visible;
        opacity: 1;
        display: flex;
        flex-direction: column;
        margin: 0px;

        p {
          margin: 0px;
        }
      }

      .image-card {
        margin: 0px 0px;
      }

      .card-title {
        background-color: transparent;
        color: $red;
      }

      .card-background {
        background-color: transparent;
      }
    }
  }
}

.custom-modal {
  border-radius: 20px;
  border: 4px solid $red;
  background-color: $backgroundWhite;

  .custom-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .custom-modal-body {
    .modal-image {
      max-height: 150px;
      object-fit: contain;
    }

    .modal-info {
      background-color: white;
      border-radius: 20px;
      width: 80%;
      text-align: center;

      p {
        margin: 5px 0px;
      }
    }
  }
}
</style>