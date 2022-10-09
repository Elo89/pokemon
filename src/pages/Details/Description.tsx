import { Div } from "../../design-system/Styled";
import { Text1 } from "../../design-system/Typography";

const Description = ({
  heightpok,
  weightpok,
  pokstat1,
  pokstat2,
  pokstat3,
  pokstat4,
  pokstat5,
  pokstat6,
  posbs1,
  posbs2,
  posbs3,
  posbs4,
  posbs5,
  posbs6,
}: any) => {
  return (
    <Div>
      <Text1 color="white">
        Altezza:{" "}
        <Text1 as="b" fontWeight="bold">
          {heightpok * 10} cm.
        </Text1>
      </Text1>

      <Text1 color="white">
        Peso:{" "}
        <Text1 as="b" fontWeight="bold">
          {weightpok * 0.1} kg
        </Text1>
      </Text1>

      <Text1 fontSize="xl" color="white" mt={4} mb={2}>Statistiche</Text1>

      <Text1 color="white">
        {pokstat1}{": "}
        <Text1 as="b" fontWeight="bold">
          {posbs1}
        </Text1>
      </Text1>

      <Text1 color="white">
        {pokstat2}{": "}
        <Text1 as="b" fontWeight="bold">
          {posbs2}
        </Text1>
      </Text1>

      <Text1 color="white">
        {pokstat3}{": "}
        <Text1 as="b" fontWeight="bold">
          {posbs3}
        </Text1>
      </Text1>

      <Text1 color="white">
        {pokstat4}{": "}
        <Text1 as="b" fontWeight="bold">
          {posbs4}
        </Text1>
      </Text1>

      <Text1 color="white">
        {pokstat5}{": "}
        <Text1 as="b" fontWeight="bold">
          {posbs5}
        </Text1>
      </Text1>
      
      <Text1 color="white">
        {pokstat6}{": "}
        <Text1 as="b" fontWeight="bold">
          {posbs6}
        </Text1>
      </Text1>
    </Div>
  );
};

export default Description;