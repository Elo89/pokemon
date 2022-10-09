import Button from '../../design-system/Button';
import { Flex } from '../../design-system/Styled';
import { PokemonName } from '../../design-system/Typography';
import CaughtButton from '../../design-system/CaughtButton';

const Row = ({
  pokemonsCaught,
  pokemon,
  addPokemonCaught,
  removePokemonCaught,
  goToPokemon,
}: any) => {
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
        data-testid={`pokemon-${pokemon.name.replace(' ', '_')}`}
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
  }

export default Row;
