import { useCallback, useState } from "react";

const api = "https://pokeapi.co/api/v2"

export interface usePokemonListType {
  pokemons?: PokemonType[];
  isLoading: boolean;
  fetchPokemons: () => void;
}

export interface PokemonType {
  name: string;
  url: string;
}

export interface PokemonResponse {
  count: number;
  next: any;
  previous: any;
  results: PokemonType[]
}

export const usePokemonList = (): usePokemonListType => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pokemons, setPokemons] = useState<PokemonResponse>();

  const fetchPokemons = useCallback(async () => {
    setIsLoading(true);
    // ?limit=100000&offset=0
    const data: PokemonResponse = await fetch(`${api}/pokemon`)
      .then((data) => {
        return data.json();
      });
    
    setPokemons(data);
    setIsLoading(false);
  }, [])

  return {
    pokemons: pokemons?.results,
    isLoading,
    fetchPokemons,
  };
};

export default usePokemonList;