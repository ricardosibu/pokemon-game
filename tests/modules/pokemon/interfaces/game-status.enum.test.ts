import { Gamestatus } from '@/modules/pokemon/interfaces'

describe('Game status enum', () => {
  test('game status "playing', () => {
    expect(Gamestatus.Playing).toBe('playing')
  })

  test('game status won', () => {
    expect(Gamestatus.Won).toBe('won')
  })

  test('game status lost', () => {
    expect(Gamestatus.Lost).toBe('lost')
  })
})
