import React, { useState } from "react";
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
  const { setValue, value, onCopy } = useClipboard(pass);
  const [iconClicked, setIconClicked] = useState(false);

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
      alignItems="center"
      justify="space-between"
      bg="red.100"
      px="0.1rem"
      borderRadius="md"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="md"
      _hover={{
        borderColor: "teal.300",
      }}
    >
      <InputGroup h="auto" w="100%">
        <Input
          w="100%"
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
        <InputRightElement h={'1.9rem'}> 
          <IconButton
            onClick={handleIconClick}
            icon={<CopyIcon />}
            size="md"
            colorScheme={iconClicked ? "green" : "teal"}
            rounded="none"
            h="100%"
            _hover={{
              background: "teal.400",
            }}
            overflow="hidden"
          />
        </InputRightElement>
      </InputGroup>
    </HStack>
  );
}
