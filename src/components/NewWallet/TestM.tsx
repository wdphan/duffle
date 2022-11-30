import {
  Box,
  Button,
  Flex,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon, CopyIcon } from "@chakra-ui/icons";
import Identicon from "./Identicon";
import { useContext } from "react";
import { globalContext } from "../store";

type Props = {
  isOpen: any;
  onClose: any;
};

export default function AccountModalTest({ isOpen, onClose }: Props) {
  const { globalState, dispatch } = useContext(globalContext);
  const { account, provider } = globalState;
  const chainIdPaths = {
    1: "", // mainnet
    42: "kovan.",
    3: "ropsten.",
    4: "rinkeby.",
    5: "goerli.",
  };
  const chainPath = provider && chainIdPaths[parseInt(provider.chainId)];

  async function handleDeactivateAccount() {
    //deactivate();
    if (provider && !provider.isMetaMask) {
      // isWalletConnect then
      await provider.disconnect();
    }
    dispatch({ type: "CLEAR_STATE" });
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
      <ModalOverlay />
      <ModalContent
        background="white"
        border="1px"
        borderStyle="solid"
        borderColor="black"
        borderRadius="none"
      >
        <ModalHeader
          color="black"
          className="font-Roboto"
          px={4}
          fontSize="lg"
          fontWeight="medium"
        >
          ACCOUNT
        </ModalHeader>
        <ModalCloseButton
          color="white"
          fontSize="sm"
          _hover={{
            color: "whiteAlpha.700",
          }}
        />
        <ModalBody pt={0} px={4}>
          <Box>
            <Flex justifyContent="space-between" alignItems="center" mb={3}>
              <Text color="black" className="font-Roboto" fontSize="sm">
                Connected with {provider?.isMetaMask ? "MetaMask" : "null"}
              </Text>
              <Button
                variant="outline"
                size="sm"
                background="#D9D9D9"
                // borderColor="black"
                borderRadius="none"
                color="black"
                fontSize="13px"
                className="font-Roboto"
                fontWeight="normal"
                px={5}
                py={2}
                _hover={{
                  background: "none",
                  borderColor: "blue.300",
                  textDecoration: "underline",
                }}
                onClick={handleDeactivateAccount}
              >
                DISCONNECT
              </Button>
            </Flex>
            <Flex alignItems="center" mt={2} mb={4} lineHeight={1}>
              <Identicon />
              <Text
                color="black"
                fontSize="xl"
                fontWeight="semibold"
                ml="2"
                lineHeight="1.1"
                className="font-Roboto"
              >
                {account &&
                  `${account.slice(0, 6)}...${account.slice(
                    account.length - 4,
                    account.length
                  )}`}
              </Text>
            </Flex>
            <Flex alignContent="center" m={3}>
              <Button
                variant="link"
                color="white"
                fontWeight="normal"
                fontSize="sm"
                _hover={{
                  textDecoration: "none",
                  color: "whiteAlpha.800",
                }}
              >
                <CopyIcon mr={1} />
                Copy Address
              </Button>
              {chainPath ? (
                <Link
                  fontSize="sm"
                  className="font-Roboto"
                  display="flex"
                  alignItems="center"
                  href={`https://${chainPath}etherscan.io/address/${account}`}
                  isExternal
                  color="black"
                  ml={4}
                  _hover={{
                    color: "black",
                    textDecoration: "underline",
                  }}
                >
                  <ExternalLinkIcon mr={1} />
                  VIEW ON EXPLORER
                </Link>
              ) : (
                ""
              )}
            </Flex>
          </Box>
        </ModalBody>

        <ModalFooter
          className="font-Roboto"
          justifyContent="end"
          background="#D9D9D9"
          borderTop="1px solid"
          borderColor="black"
          p={6}
        >
          <Text
            borderColor="black"
            color="black"
            textAlign="left"
            fontWeight="medium"
            fontSize="md"
          >
            TRANSACTIONS WILL APPEAR HERE...
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
