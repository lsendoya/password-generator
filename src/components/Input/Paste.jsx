import { useState } from "react";
import {
  HStack,
  useClipboard,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

export function InputPaste({ pass }) {
  const { setValue, onCopy } = useClipboard(pass);
  const [setIconClicked] = useState(false);

  const handlePaste = (e) => {
    setValue(e.target.value);
  };

  const handleIconClick = () => {
    onCopy();
    setIconClicked(true);
  };

  return (
    <HStack
      w="90%"
      h="2rem"
      bg="red.100"
      px="0.1rem"
      borderRadius="md"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="md"
      _hover={{
        borderColor: "teal.300",
      }}
      overflowY={"hidden"}
      alignItems={"stretch"}
      justifyItems={"stretch"}
    >
      <InputGroup h="auto" w="100%">
        <Input
          pointerEvents="none"
          color="black.300"
          fontSize="1.1em"
          textAlign="center"
          letterSpacing="2px"
          fontWeight="medium"
          value={pass}
          variant="unstyled"
          onChange={handlePaste}
        />
        <InputRightElement>
          <IconButton
            variant={"solid"}
            onClick={handleIconClick}
            icon={<CopyIcon />}
            rounded="none"
          />
        </InputRightElement>
      </InputGroup>
    </HStack>
  );
}
