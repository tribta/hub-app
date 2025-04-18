import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/bonglua.png";

const NavBar = () => {
  return (
    <HStack>
      <Image
        src={logo}
        alt="logo"
        boxSize={"60px"}
        objectFit={"contain"}></Image>
      <Text>Navigation Bar</Text>
    </HStack>
  );
};

export default NavBar;
