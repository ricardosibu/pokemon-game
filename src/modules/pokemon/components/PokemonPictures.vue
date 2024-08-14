<template>
  <div class="mt-7 mb-5">
    <img v-if="showPokemon" :src="pokemonImage" width="200" />

    <div v-else-if="!pokemonImage" class="relative flex justify-center items-center">
      <div
        class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"
      ></div>
      <img
        src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
        class="rounded-full h-28 w-28"
      />
    </div>

    <img v-else :src="pokemonImage" width="200" class="brightness-0" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  pokemonId: number
  name: string
  showPokemon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showPokemon: true
})

const pokemonImage = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`
)
console.log('image', pokemonImage.value)
</script>

<style scoped></style>
