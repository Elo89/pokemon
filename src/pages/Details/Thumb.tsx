import { Div, Flex } from "../../design-system/Styled";
import { Text1 } from "../../design-system/Typography";
import Description from "./Description";

const PokemonThumbnail = ({
  name,
  image,
  type,
  height,
  weight,
  stat1,
  stat2,
  stat3,
  stat4,
  stat5,
  stat6,
  bs1,
  bs2,
  bs3,
  bs4,
  bs5,
  bs6,
}: any) => {
  return (
    <Flex
      flexDirection={["column", "row"]}
      alignItems="center"
      justifyContent={["normal", 'space-between']}
    >
      <Div>
        <Div
          as="img"
          src={image}
          alt={name}
          width="100%"
        />
      </Div>
      <Div
        bg="primary"
        minWidth="250px"
        maxWidth="330px"
        width="100%"
        borderRadius="20px"
        p={4}
        m={4}
      >
        <Text1 color="white">
          Tipo:{" "}
          <Text1 as="b" fontWeight="bold">
            {type}
          </Text1>
        </Text1>
        <Description
          weightpok={weight}
          heightpok={height}
          pokstat1={stat1}
          pokstat2={stat2}
          pokstat3={stat3}
          pokstat4={stat4}
          pokstat5={stat5}
          pokstat6={stat6}
          posbs1={bs1}
          posbs2={bs2}
          posbs3={bs3}
          posbs4={bs4}
          posbs5={bs5}
          posbs6={bs6}
        />
      </Div>
    </Flex>
  );
};

export default PokemonThumbnail;