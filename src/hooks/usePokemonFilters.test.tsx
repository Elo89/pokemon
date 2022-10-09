import { renderHook, act } from '@testing-library/react-hooks'
import usePokemonFilters, { filterType } from './usePokemonFilters'

const data = [
  {
    "name":"bulbasaur",
    "url":"https://pokeapi.co/api/v2/pokemon/1/"
  },
  {
    "name":"ivysaur",
    "url":"https://pokeapi.co/api/v2/pokemon/2/"
  },
  {
    "name":"venusaur",
    "url":"https://pokeapi.co/api/v2/pokemon/3/"
  },
]

test('should increment/decrease pokemon', () => {
  const { result } = renderHook(() => usePokemonFilters({ data, filtersIsActive: true }))

  expect(result.current.pokemonsCaught.length).toBe(0);
  
  act(() => {
    result.current.addPokemonCaught("bulbasaur")
  })
  
  expect(result.current.pokemonsCaught.length).toBe(1);

  act(() => {
    result.current.removePokemonCaught("bulbasaur")
  })
  
  expect(result.current.pokemonsCaught.length).toBe(0);


  act(() => {
    result.current.addPokemonCaught("ivysaur")
  })

  act(() => {
    result.current.addPokemonCaught("venusaur")
  })  
  
  expect(result.current.pokemonsCaught).toStrictEqual(["ivysaur", "venusaur"]);
})

test('should filter pokemon', () => {
  const { result } = renderHook(() => usePokemonFilters({ data, filtersIsActive: true }))

  act(() => {
    result.current.setFilters(filterType.ALL);
  })

  expect(result.current.data.length).toBe(3);

  act(() => {
    result.current.addPokemonCaught("ivysaur")
  })

  act(() => {
    result.current.addPokemonCaught("venusaur")
  })
  
  act(() => {
    result.current.setFilters(filterType.CAUGHT);
  })

  expect(result.current.data.length).toBe(2);
  
  act(() => {
    result.current.setFilters(filterType.NOTCAUGHT);
  })

  expect(result.current.data.length).toBe(1);
})


