import axios from 'axios'
import pokemonApi from '../api/pokemonApi'
import type { Pokemon, PokemonListResponse, PokemonResponse } from '../interfaces'
// import { sleep } from './sleep'

export const getPokemons = async (): Promise<Pokemon[]> => {
  // await sleep(2)

  // throw new Error('This is an error')

  const { data } = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=45')

  const pokemonPromises: Promise<{ id: number; name: string; frontSprite: string }>[] = []

  for (const { url } of data.results) {
    const pokemonPromise = axios.get<PokemonResponse>(url).then(({ data }) => {
      return {
        id: data.id,
        name: data.name,
        frontSprite: data.sprites.front_default
      }
    })

    pokemonPromises.push(pokemonPromise)
  }

  const pokemons: Pokemon[] = await Promise.all(pokemonPromises)
  return pokemons
}
