import { Button, Box, Text, SimpleGrid } from "@chakra-ui/react";
import Identicon from "src/components/NewWallet/Identicon";
import { handleInjectedProvider, handleWalletConnect } from "src/lib/index";
import { useContext, useState } from "react";
import { globalContext } from "../store";
import BeatLoader from "react-spinners/BeatLoader";

type Props = {
  handleOpenModal: any;
};

export default function ConnectButtonTest({ handleOpenModal }: Props) {
  const { globalState, dispatch } = useContext(globalContext);
  const [etherBalance, setEtherBalance] = useState(0);
  const [loading, setLoading] = useState(false);
  const [walletConnectLoading, setWalletConnectLoading] = useState(false);

  async function handleConnectWallet(wallet: string) {
    wallet === "WalletConnect"
      ? setWalletConnectLoading(true)
      : setLoading(true);
    try {
      const { account, web3 } =
        wallet === "WalletConnect"
          ? await handleWalletConnect(dispatch)
          : await handleInjectedProvider(dispatch);
      const balance = await web3.eth.getBalance(account);
      console.log("balance", balance);
      setEtherBalance(parseInt(balance) / 1e18);
    } catch (error) {
      console.error(error);
    } finally {
      wallet === "WalletConnect"
        ? setWalletConnectLoading(false)
        : setLoading(false);
    }
  }
  // console.log('globalState', globalState)
  return globalState.account ? (
    <Box
      className="flex items-center font-Roboto justify-center bg-[#D9D9D9] text-black py-0 "
      //   mt={3}
      //   display="flex"
      //   alignItems="center"
      //   background="gray.700"
      //   borderRadius="xl"
      //   py="0"
    >
      <Box px="3">
        <Text color="black" className="font-Roboto" fontSize="mx">
          {etherBalance.toFixed(3)} ETH
        </Text>
      </Box>
      <Button
        onClick={handleOpenModal}
        className=""
        bg="white"
        border="1px solid transparent"
        _hover={{
          border: "1px",
          borderStyle: "solid",
          borderColor: "black",
          backgroundColor: "white",
          rounded: "none",
        }}
        borderRadius="none"
        m="1px"
        px={3}
      >
        <Text
          color="black"
          rounded="none"
          fontSize="md"
          fontWeight="medium"
          mr="2"
        >
          {globalState.account &&
            `${globalState.account.slice(0, 6)}...${globalState.account.slice(
              globalState.account.length - 4,
              globalState.account.length
            )}`}
        </Text>
        <Identicon />
      </Button>
    </Box>
  ) : (
    <Button
      isLoading={loading}
      spinner={<BeatLoader size={8} color="white" />}
      onClick={() => handleConnectWallet("MetaMask")}
      className="font-Roboto"
      bg="#D9D9D9"
      color="black"
      fontSize="xl"
      fontWeight="none"
      rounded="none"
      border="1px solid transparent"
      _hover={{
        borderColor: "black",
        color: "grey",
      }}
      _active={{
        backgroundColor: "black",
        borderColor: "black",
      }}
    >
      CONNECT WITH METAMASK
    </Button>
  );
}
