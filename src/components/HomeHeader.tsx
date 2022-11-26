import { FC } from "react";
import ConnectButton from "src/components/NewWallet/ConnectButton";
import Link from "next/link";
import { useDisclosure } from "@chakra-ui/react";
import AccountModal from "@/components/NewWallet/AccountModal";

const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="flex items-center justify-center space-x-[5em] sm:space-x-[20em] pt-5">
      <Link href="/">
        <a className="font-Roboto max-w-7xl text-2xl font-normal">DUFFLE</a>
      </Link>
      <ConnectButton handleOpenModal={undefined} />
    </div>
  );
};

export default Header;
