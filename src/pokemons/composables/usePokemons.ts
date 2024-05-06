import { computed, watchEffect } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { getPokemons } from '../helpers/get-pokemons'

export const usePokemons = () => {
  const {
    isLoading,
    data: pokemons,
    isError,
    error
  } = useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons,
    retry: 0
  })

  watchEffect(() => {
    // if (isError.value) {
    //   console.log('isLoading', isLoading.value)
    // }
  })

  return {
    // properties
    pokemons,
    isLoading,
    error,
    isError,

    //conputed

    count: computed(() => pokemons.value?.length ?? 0)
  }
}
