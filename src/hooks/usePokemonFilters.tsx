import { useEffect, useState } from "react";
import uniq from "lodash/uniq";
import { PokemonType } from "./usePokemonDetails";

export enum filterType {
  ALL = 'ALL', 
  CAUGHT = 'CAUGHT',
  NOTCAUGHT = 'NOTCAUGHT'
}

export interface usePokemonCaptureType {
  addPokemonCaught: (name: string) => void;
  removePokemonCaught: (name: string) => void;
  setFilters: (name: filterType) => void;
  filter: filterType;

  pokemonsCaught: string[];
  data: PokemonType[];
}

export const usePokemonFilters = ({ data, filtersIsActive }: { data?: PokemonType[], filtersIsActive?: boolean }): usePokemonCaptureType => {
  const [pokemonsfiltered, setPokemonsfiltered] = useState<PokemonType[]>([]);
  const [pokemonsCaught, setPokemonsCaught] = useState<string[]>([]);
  const [filter, setFilters] = useState<filterType>(filterType.ALL);

  const addPokemonCaught = (name: string) => {
    if(pokemonsCaught) {
      setPokemonsCaught([...pokemonsCaught, name])
      localStorage.setItem('pokemonsCaught', JSON.stringify(uniq([...pokemonsCaught, name])))
    }
    else {
      setPokemonsCaught([name])
      localStorage.setItem('pokemonsCaught', JSON.stringify(uniq([name])))
    }
  }

  const removePokemonCaught = (name: string) => {
    const n = pokemonsCaught.filter(e => e !== name)
    setPokemonsCaught(n);
    localStorage.setItem('pokemonsCaught', JSON.stringify(n))
  }

  const fCaught = (data: PokemonType[]) => 
    data.filter(({ name }: any) =>
      pokemonsCaught.includes(name)
    )
  
  const fNotCaught = (data: PokemonType[]) => 
    data.filter(({ name }: any) =>
      !pokemonsCaught.includes(name)
    )

  useEffect(() => {
    if(filtersIsActive && data) {
      if (filter === filterType.ALL) {
        setPokemonsfiltered(data)
      }
      if (filter === filterType.CAUGHT) {
        const filtered = fCaught(data);        
        setPokemonsfiltered(filtered);
      }
      if (filter === filterType.NOTCAUGHT) {
        const filtered = fNotCaught(data);
        setPokemonsfiltered(filtered);
      }
    }
  }, [filter, data, filtersIsActive, pokemonsCaught])

  useEffect(() => {
    if(localStorage.getItem('pokemonsCaught')) {
      // @ts-ignore
      const pokemonsCaught = JSON.parse(localStorage.getItem('pokemonsCaught'));
      setPokemonsCaught(pokemonsCaught);
    }
  }, [])

  return {
    addPokemonCaught,
    removePokemonCaught,
    setFilters,
    filter,

    pokemonsCaught,
    data: pokemonsfiltered
  };
};

export default usePokemonFilters;