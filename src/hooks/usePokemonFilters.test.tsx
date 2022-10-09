import { renderHook, act } from '@testing-library/react-hooks'
import usePokemonFilters, { filterType } from './usePokemonFilters'
import pokemonListResponse from '../mockAPI/pokemonListResponse.json'


test('should increment/decrease pokemon', () => {
  // @ts-ignore
  const { result } = renderHook(() => usePokemonFilters({ data: pokemonListResponse.results, filtersIsActive: true }))

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
  // @ts-ignore
  const { result } = renderHook(() => usePokemonFilters({ data: pokemonListResponse.results, filtersIsActive: true }))

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


