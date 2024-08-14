import { computed, onMounted, ref } from 'vue'
import { getAllPokemon } from '../services'
import { Gamestatus, type Pokemon } from '../interfaces'

import confetti from 'canvas-confetti'

export const usePokemonGame = () => {
  const gamestatus = ref<Gamestatus>(Gamestatus.Playing)
  const showPokemon = ref<boolean>(false)
  const pokemons = ref<Pokemon[]>([])
  const pokemonOptions = ref<Pokemon[]>([])

  const randomPokemon = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length)
    return pokemonOptions.value[randomIndex]
  })

  const isloading = computed(() => pokemons.value.length === 0)

  const getPokemon = async (): Promise<Pokemon[]> => {
    const response: Pokemon[] = await getAllPokemon()
    const pokemonArray = response.map((pokemon) => {
      const urlParts = pokemon.url.split('/')
      const id = urlParts.at(-2) ?? 0

      return {
        name: pokemon.name,
        id: id
      }
    })

    return pokemonArray.sort(() => Math.random() - 0.5)
  }

  const getNextOption = (howMany: number = 4) => {
    showPokemon.value = false
    gamestatus.value = Gamestatus.Playing
    pokemonOptions.value = pokemons.value.slice(0, howMany)
    pokemons.value = pokemons.value.slice(howMany)
  }

  const checkAnswer = (id: number) => {
    const idSelected = id.toString()
    if (idSelected == randomPokemon.value.id) {
      gamestatus.value = Gamestatus.Won
      showPokemon.value = true
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
    } else {
      gamestatus.value = Gamestatus.Lost
      showPokemon.value = true
    }
  }

  onMounted(async () => {
    pokemons.value = await getPokemon()
    getNextOption()
  })
  return {
    getPokemon,
    randomPokemon,
    pokemonOptions,
    checkAnswer,
    getNextOption,
    gamestatus,
    showPokemon
  }
}
