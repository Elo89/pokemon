import { useCallback, useState } from "react";

const api = "https://pokeapi.co/api/v2"

export interface usePokemonDetailsType {
  pokemon?: any;
  isLoading: boolean;
  fetchPokemon: (name: string) => void;
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

export const usePokemonDetails = (): usePokemonDetailsType => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pokemon, setPokemon] = useState<any>();

  const fetchPokemon = useCallback(async (name: string) => {
    setIsLoading(true);
    const data: any = await fetch(`${api}/pokemon/${name}`)
      .then((data) => {
        return data.json();
      });
    
    setPokemon(data);
    setIsLoading(false);
  }, [])

  return {
    pokemon: pokemon,
    isLoading,
    fetchPokemon,
  };
};

export default usePokemonDetails;