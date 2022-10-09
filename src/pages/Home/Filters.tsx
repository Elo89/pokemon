import Button from '../../design-system/Button';
import { Flex } from '../../design-system/Styled';
import { filterType } from '../../hooks/usePokemonFilters';

interface FiltersType {
  setFilters: (type: filterType) => void;
  filter: filterType;
}

function Filters({ setFilters, filter }: FiltersType) {
  return (
    <Flex>
      <Button 
        fontSize={'xs'}
        type={filter !== filterType.ALL ? 'secondary' : 'primary'}
        onClick={() => setFilters(filterType.ALL)}
        mr={2}
      >
        Tutti
      </Button>
      <Button 
        fontSize={'xs'}
        type={filter !== filterType.CAUGHT ? 'secondary' : 'primary'}
        onClick={() => setFilters(filterType.CAUGHT)}
        mr={2}
      >
        Catturati
      </Button>
      <Button
        fontSize={'xs'}
        type={filter !== filterType.NOTCAUGHT ? 'secondary' : 'primary'}
        onClick={() => setFilters(filterType.NOTCAUGHT)}
        mr={2}
      >
        Non Catturati
      </Button>
    </Flex>
  );
}

export default Filters;
