import { FC } from "react";
import ConnectButton from "src/components/NewWallet/ConnectButton";
import Link from "next/link";
import { useDisclosure } from "@chakra-ui/react";
import AccountModal from "@/components/NewWallet/AccountModal";

const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className=" bg-black">
      <div className="w-full flex items-center justify-center pt-5 bg-black">
        <div className="flex flex-col mx-8 w-[25rem]">
          <Link href="/">
            <a className="font-Roboto bg-black text-white text-3xl flex items-start font-inter font-bold py-3">
              DUFFLE
            </a>
          </Link>
          <div className="border-y-[1px] text-white border-white bg-black pr-64 font-inter text-2xl py-3">
            {
              // Our connect button will only handle opening
            }
            <ConnectButton handleOpenModal={onOpen} />
            {
              // Our Account modal will handle open state & closing
            }
            <AccountModal isOpen={isOpen} onClose={onClose} />
          </div>
        </div>

        <div>
          <div>
            <br />
          </div>
          <div className="border-y-[1px] border-white text-white bg-black max-w-[24rem] hidden text-md py-1 xl:mt-[-1.3rem] xs:hidden sm:hidden md:block xl:block mx-10 font-inter">
            Duffel is a Dapp that brings communities closer than ever before
            with a quick search
          </div>
        </div>
        <div>
          <div className="mx-10 border-y-[1px]  border-white text-white bg-black text-2xl py-3 hidden xs:hidden sm:hidden md:block xl:block font-inter xl:mt-[0.4rem]">
            November 21, 2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
