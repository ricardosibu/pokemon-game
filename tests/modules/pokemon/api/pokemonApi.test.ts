import { pokemonApi } from '@/modules/api'

describe('pokemonApi', () => {
  test('should be configured as expected', () => {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

    expect(pokemonApi.defaults.baseURL).toBe(baseUrl)
  })
})
