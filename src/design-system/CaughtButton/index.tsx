import Button from '../../design-system/Button';

function CaughtButton({
  removePokemonCaught,
  addPokemonCaught,
  name,
  isCaught,
}: any) {
  return (
    <Button
      onClick={() => {
        if (isCaught) {
          removePokemonCaught(name)
        } else {
          addPokemonCaught(name)
        }
      }} 
      mr={2}>
      {isCaught ? "Rilascia" : "Cattura"}
    </Button>
  );
}

export default CaughtButton;
