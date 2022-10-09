import React from 'react';
import { usePokemonDetailsType } from '../hooks/usePokemonDetails';
import { usePokemonListType } from '../hooks/usePokemonList';

export const PokemonListContext = React.createContext<usePokemonListType>({
  pokemons: [], 
  isLoading: true,
  fetchPokemons: () => null,
});

export const PokemonDetailsContext = React.createContext<usePokemonDetailsType>({
  pokemon: undefined, 
  isLoading: true,
  fetchPokemon: () => null,
});