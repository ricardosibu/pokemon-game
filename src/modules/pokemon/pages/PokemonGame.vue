<template>
  <div class="flex flex-col justify-center items-center w-screen h-screen">
    <img src="../../../assets/images/logo-pokemon.png" width="380" height="220" />
    <h1 class="text-2xl text-slate-500 font-poppins">Welcome to Pokemon Game</h1>
    <h2 class="text-blue-400 text-sm font-poppins m-4">¿Adivina quien es este Pokemon?</h2>

    <button
      class="w-48 h-8 bg-[#ffcc00] border-solid border-2 border-[#0070ba] rounded-md text-[#0070ba] font-bold disabled:bg-gray-400 disabled:border-gray-50 disabled:text-white"
      :disabled="gamestatus === Gamestatus.Playing"
      @click="getNextOption(4)"
    >
      Volver a jugar
    </button>
    <!-- Pokemon pictures -->
    <PokemonPictures :pokemon-id="randomPokemon?.id" :showPokemon="showPokemon" />
    <!-- Pokemon options -->
    <PokemonOptions
      :options="pokemonOptions"
      @selected-option="checkAnswer"
      :block-selection="gamestatus !== Gamestatus.Playing"
    />
  </div>
</template>

<script setup>
import PokemonPictures from '../components/PokemonPictures.vue'
import PokemonOptions from '../components/PokemonOptions.vue'

import { usePokemonGame } from '../composables/usePokemonGame'
import { Gamestatus } from '../interfaces'

const { randomPokemon, pokemonOptions, checkAnswer, gamestatus, showPokemon, getNextOption } =
  usePokemonGame()
</script>
