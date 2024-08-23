import type { Pokemon } from '@/modules/pokemon/interfaces'

const pokemon: Pokemon = {
  id: 1,
  name: 'bulbasaur'
}

describe('pokemon interface', () => {
  test('should pokemon has id to be a number', () => {
    expect(pokemon.id).toEqual(expect.any(Number))
  })

  test('should pokemon has name to be a string', () => {
    expect(pokemon.name).toString()
  })
})
