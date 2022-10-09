import { Flex } from '../../design-system/Styled';
import { PokemonName, Text1 } from '../../design-system/Typography';
import { useParams } from "react-router-dom";
import { useCallback, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { PokemonDetailsContext } from '../../context/contexts';
import Button from '../../design-system/Button';
import PokemonThumbnail from './Thumb';
import usePokemonFilters from '../../hooks/usePokemonFilters';
import CaughtButton from '../../design-system/CaughtButton';

function Details() {
  const params = useParams();
  const { fetchPokemon, pokemon, isLoading } = useContext(PokemonDetailsContext)
  const { pokemonsCaught, removePokemonCaught, addPokemonCaught } = usePokemonFilters({ data: [pokemon] });
  const navigate = useNavigate();
  useEffect(() => {
    if (params.name) {
      fetchPokemon(params.name as string);
    }
  }, [params.name]);

  const goBack = useCallback(() => {
    navigate(`/`)
  }, [])

  const isCaught = pokemonsCaught.includes(pokemon?.name);

  return (
    <Flex
      flexDirection="column"
      p={4}
      maxWidth="800px"
      m="0 auto"
    >
      <Flex justifyContent="space-between" pb={4} flexWrap="wrap">
        <Flex justifyContent="space-between" pb={4} order={[2, 1]} >
          <Button onClick={goBack}>
            {"<"} back
          </Button>
        </Flex>

        <Flex justifyContent="space-between" pb={4} order={[1, 2]} flex={['0 0 100%', 'auto']} >
          <PokemonName color="secondary" textAlign={['center']} width="100%">
            {(params?.name || '').toUpperCase()}
          </PokemonName>
        </Flex>

        <Flex justifyContent="space-between" pb={4} order={[3]}>
          <CaughtButton
            addPokemonCaught={addPokemonCaught}
            removePokemonCaught={removePokemonCaught}
            isCaught={isCaught}
            name={pokemon?.name}
            mr={2}
          />
        </Flex>
      </Flex>

      {isLoading &&
        <Text1>
          loading...
        </Text1>
      }

      {!isLoading && !!pokemon &&
        <PokemonThumbnail
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.other.dream_world.front_default}
          type={pokemon.types[0].type.name}
          height={pokemon.height}
          weight={pokemon.weight}
          stat1={pokemon.stats[0].stat.name}
          stat2={pokemon.stats[1].stat.name}
          stat3={pokemon.stats[2].stat.name}
          stat4={pokemon.stats[3].stat.name}
          stat5={pokemon.stats[4].stat.name}
          stat6={pokemon.stats[5].stat.name}
          bs1={pokemon.stats[0].base_stat}
          bs2={pokemon.stats[1].base_stat}
          bs3={pokemon.stats[2].base_stat}
          bs4={pokemon.stats[3].base_stat}
          bs5={pokemon.stats[4].base_stat}
          bs6={pokemon.stats[5].base_stat}
        />
      }

    </Flex>
  );
}

export default Details;
