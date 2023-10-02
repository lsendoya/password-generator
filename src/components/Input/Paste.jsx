import { HStack, Text } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

export function InputPaste({pass}) {
  return (
    <HStack
      w="90%"
      h="2rem"
      alignItems={"center"}
      justify={"space-between"}
      bg="red.100"
      py="1rem"
    >
      <Text
        w="80%"
        pointerEvents="none"
        color="black.300"
        fontSize="1.1em"
        pl="1rem"
        textAlign={"center"}
        letterSpacing={"2px"}
        fontWeight={"medium"}
      >
        {pass}
      </Text>
      <CopyIcon color="whiteAlpha.900" boxSize={8} pr="0.5rem" />
    </HStack>
  );
}
