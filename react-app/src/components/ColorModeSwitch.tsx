"use client";

import {
  ClientOnly,
  HStack,
  IconButton,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <HStack>
        <ClientOnly fallback={<Skeleton boxSize="8" />}>
          <IconButton onClick={toggleColorMode} variant="outline" size="sm">
            {colorMode === "light" ? <LuSun /> : <LuMoon />}
          </IconButton>
        </ClientOnly>
      </HStack>
      <Text>Dark/Light Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
