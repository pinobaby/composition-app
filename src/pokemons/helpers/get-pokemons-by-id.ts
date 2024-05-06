import pokemonApi from '../api/pokemonApi'
import type { Pokemon, PokemonResponse } from '../interfaces'
import { sleep } from './sleep'

export const getPokemonsById = async (id: number): Promise<Pokemon> => {
  await sleep(2)

  const { data } = await pokemonApi.get<PokemonResponse>(`/pokemon/${id}`)

  return {
    id: data.id,
    name: data.name,
    frontSprite: data.sprites.front_default
  }
}
