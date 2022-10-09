import { act, cleanup, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from '../../theme/provider'
import mock from '../../mockAPI/pokemonListResponse.json'
import ReusableProvider from '../../context/ReusableContext';
import { PokemonListContext } from '../../context/contexts';
import usePokemonList from '../../hooks/usePokemonList';
import Row from './Row';

// @ts-ignore
const pokemons = mock.results;

describe("[home] - HOME integration", () => {
  beforeEach(() => {
    cleanup();
    jest.useFakeTimers()
  });

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it('should mount Row', async () => {
    

    const root = render(
      <ReusableProvider Context={PokemonListContext} hook={usePokemonList}>
        <ThemeProvider>
          <BrowserRouter>
            <Row 
              pokemonsCaught={[]}
              pokemon={pokemons[1]}
              addPokemonCaught={() => null}
              removePokemonCaught={() => null}
              goToPokemon={() => null}
            />
          </BrowserRouter>
        </ThemeProvider>
      </ReusableProvider>
    );
      
    await act(() => {      
      expect(root.findByText("IVYSAUR")).toBeTruthy();
      expect(root.findByText("Cattura")).toBeTruthy();
    });
  });

  it('should mount Row - Caught', async () => {
    const root = render(
      <ReusableProvider Context={PokemonListContext} hook={usePokemonList}>
        <ThemeProvider>
          <BrowserRouter>
            <Row 
              pokemonsCaught={['ivysaur']}
              pokemon={pokemons[1]}
              addPokemonCaught={() => null}
              removePokemonCaught={() => null}
              goToPokemon={() => null}
            />
          </BrowserRouter>
        </ThemeProvider>
      </ReusableProvider>
    )

    await act(() => {      
      expect(root.findByText("IVYSAUR")).toBeTruthy();
      expect(root.findByText("Rilascia")).toBeTruthy();
    });
  });
})
