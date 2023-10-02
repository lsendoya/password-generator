import { HStack, Text } from "@chakra-ui/react";
import {
  BiSignal1,
  BiSignal2,
  BiSignal3,
  BiSignal4,
  BiSignal5,
} from "react-icons/bi";

export function SecurityLevel({ items }) {
  const { click, password } = items;

  const getSecurityIcon = () => {
    const securityLevels = [
      {
        regex: /^(?=.*[A-Za-z])[\w!@#$%^&*()-_+=<>?]{1,7}$/,
        icon: <BiSignal1 />,
      },
      {
        regex: /^(?=.*[A-Za-z])[\w!@#$%^&*()-_+=<>?]{8,11}$/,
        icon: <BiSignal2 />,
      },
      {
        regex:
          /^(?=.*[A-Za-z])(?=.*[\d!@#$%^&*()-_+=<>?])[\w!@#$%^&*()-_+=<>?]{12,15}$/,
        icon: <BiSignal3 />,
      },
      {
        regex:
          /^(?=.*[A-Za-z])(?=.*[\d])(?=.*[\d!@#$%^&*()-_+=<>?])[\w!@#$%^&*()-_+=<>?]{16,19}$/,
        icon: <BiSignal4 />,
      },
      {
        regex:
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\d!@#$%^&*()-_+=<>?])[\w!@#$%^&*()-_+=<>?]{20,}$/,
        icon: <BiSignal5 />,
      },
    ];

    if (!click) return null;

    for (const level of securityLevels) {
      if (level.regex.test(password)) {
        return level.icon;
      }
    }

    return null;
  };

  return (
    <HStack
      w="90%"
      h="1rem"
      alignItems="center"
      justify="space-between"
      bg="red.100"
      py="0.8rem"
    >
      <Text
        w="60%"
        pointerEvents="none"
        color="black.300"
        fontSize="0.8em"
        pl="1rem"
        textAlign="center"
        letterSpacing="1px"
        fontWeight="medium"
      >
        Nivel de seguridad
      </Text>
      {getSecurityIcon()}
    </HStack>
  );
}
