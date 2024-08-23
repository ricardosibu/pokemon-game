import PokemonPictures from '@/modules/pokemon/components/PokemonPictures.vue'
import { mount } from '@vue/test-utils'

describe('<PokemonPicture>', () => {
  test('should render the hidden image when showPokemon prop is false', () => {
    const pokemonId = 25
    const wrapper = mount(PokemonPictures, {
      props: { pokemonId, showPokemon: false }
    })
    const imageSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`
    const image = wrapper.find('img')
    const attributes = image.attributes()
    expect(attributes).toEqual(
      expect.objectContaining({
        class: 'brightness-0',
        src: imageSource
      })
    )
  })

  test('should render the image when showPokemo prop is true', () => {
    const pokemonId = 25
    const wrapper = mount(PokemonPictures, {
      props: { pokemonId, showPokemon: true }
    })
    const imageSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`

    const image = wrapper.find('img')
    const attributes = image.attributes()
    expect(attributes).toEqual(
      expect.objectContaining({
        src: imageSource,
        width: '200'
      })
    )
  })
})
