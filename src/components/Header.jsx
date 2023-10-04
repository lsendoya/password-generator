import { VStack, HStack, Text } from "@chakra-ui/react";
import { InputPaste } from "./Input/Paste";
import { ProgressBar } from "./Progress/Bar";

export function Header({ passwordState }) {
  const { password, length, setLength } = passwordState;
  return (
    <VStack w="100%" h="auto" px="1" py="5px">
      <InputPaste pass={password} />
      <HStack
        w="95%"
        justifyContent="space-between"
        alignItems="center"
        p="2px"
      >
        <Text w="70%" fontSize={14} fontWeight={"semibold"} pl="1rem">
          Longitud de caracter
        </Text>
        <Text fontSize={22} pr="1rem">
          {length}
        </Text>
      </HStack>
      <ProgressBar setlength={setLength} />
    </VStack>
  );
}
