import { pokemonApi } from '@/modules/api'
import type { Pokemon } from '../interfaces'

export const getAllPokemon = async (): Promise<Pokemon[]> => {
  const response = await pokemonApi.get('/?limit=151')

  const pokemons = await response
  return pokemons.data.results
}
