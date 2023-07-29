import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "../components/ColorModeSwitch.tsx";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

// 'ColorModeSwitch'. Did you mean to use 'import ColorModeSwitch from "../components/ColorModeSwitch.tsx"'
export default NavBar;
