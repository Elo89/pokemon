import Button from '../../design-system/Button';
import { Flex } from '../../design-system/Styled';
import { filterType } from '../../hooks/usePokemonFilters';

interface ButtonDto {
  setFilters?: () => void;
  filter: filterType;
}

function Filters({ setFilters, filter }: any) {
  return (
    <Flex>
      <Button 
        fontSize={'xs'}
        height={30}
        type={filter != filterType.ALL ? 'secondary' : 'primary'}
        onClick={() => setFilters(filterType.ALL)}
        mr={2}
      >
        Tutti
      </Button>
      <Button 
        fontSize={'xs'}
        height={30}
        type={filter != filterType.CAUGHT ? 'secondary' : 'primary'}
        onClick={() => setFilters(filterType.CAUGHT)}
        mr={2}
      >
        Catturati
      </Button>
      <Button
        fontSize={'xs'}
        height={30}
        type={filter != filterType.NOTCAUGHT ? 'secondary' : 'primary'}
        onClick={() => setFilters(filterType.NOTCAUGHT)}
        mr={2}
      >
        Non Catturati
      </Button>
    </Flex>
  );
}

export default Filters;
