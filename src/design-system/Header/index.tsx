import { Div, Flex } from '../Styled';

const iconPath = process.env.PUBLIC_URL + '/assets/images/';

function Header() {
  return (
    <Flex 
      alignItems="center"
      justifyContent="center"
      bg="primary"
      height="150px"
      data-testid={'header-title'}
    >
      <Div
        as='img'
        src={`${iconPath}logo.png`}
        height={["80px", "100px"]}
        alt="Logo"
        style={{
          margin: "20px"
        }}  
      />
      <Div
        as='img'
        src={`${iconPath}pokeball.png`}
        height={["80px", "100px"]}
        alt="Logo"
        style={{
          margin: "20px"
        }}  
      />
    </Flex>
  );
}

export default Header;
