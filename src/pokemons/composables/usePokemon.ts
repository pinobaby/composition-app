//useQuery

import { useQuery } from '@tanstack/vue-query'
import { getPokemonsById } from '../helpers/get-pokemons-by-id'

export const usePokemon = (id: string) => {
  const {
    isLoading,
    isError,
    data: pokemon,
    error
  } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => getPokemonsById(Number(id))
  })

  return {
    isLoading,
    isError,
    pokemon,
    errorMessage: error
  }
}
