import { useCallback, useContext, useEffect } from 'react';
import { PokemonListContext } from '../../context/contexts';
import Button from '../../design-system/Button';
import { Div, Flex } from '../../design-system/Styled';
import { PokemonName, Text1 } from '../../design-system/Typography';
import { useNavigate } from "react-router-dom";
import usePokemonFilters from '../../hooks/usePokemonFilters';
import Filters from './Filters';
import CaughtButton from '../../design-system/CaughtButton';

function Home() {
  const { fetchPokemons, pokemons, isLoading } = useContext(PokemonListContext)
  const { setFilters, data, addPokemonCaught, pokemonsCaught, removePokemonCaught, filter } = usePokemonFilters({ data: pokemons, filtersIsActive: true });
  const navigate = useNavigate();

  const goToPokemon = useCallback((pokemon: any) => () => {
    navigate(`/${pokemon.name}`)
  }, [])

  useEffect(() => {
    fetchPokemons();
  }, [])

  return (
    <Flex
      flexDirection="column"
      p={4}
      maxWidth="800px"
      m="0 auto"
    >
      <Filters setFilters={setFilters} filter={filter} />

      {isLoading &&
        <Text1>
          loading...
        </Text1>
      }

      <Div mt={4}>
        {!isLoading && data?.map((pokemon) => {
          const isCaught = pokemonsCaught.includes(pokemon.name);
          return (
            <Flex
              key={pokemon.name.replace(' ', '_')}
              justifyContent="space-between"
              bg={isCaught ? "secondary" : "primary"}
              p={4}
              mb={2}
              borderRadius={20}
              display={['block', 'flex']}
            >
              <PokemonName
                color={!isCaught ? "secondary" : "primary"}
                textAlign={['center', 'left']}
                textShadow={isCaught ? `0 4px #999` : `0 4px black`}
              >
                {pokemon.name.toUpperCase()}
              </PokemonName>

              <Flex
                mt={[4, 0]}
                justifyContent={['center', 'start']}
              >
                <CaughtButton
                  addPokemonCaught={addPokemonCaught}
                  removePokemonCaught={removePokemonCaught}
                  isCaught={isCaught}
                  name={pokemon.name}
                  mr={2} />
                <Button onClick={goToPokemon(pokemon)}>
                  Visualizza
                </Button>
              </Flex>
            </Flex>
          )
        })}
      </Div>

    </Flex>
  );
}

export default Home;
