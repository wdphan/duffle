import React from "react";
import Image from "next/image";
import Splitz from "public/images/Splitz.png";
import ConnectButton from "@/components/NewWallet/ConnectButton";
import Link from "next/link";
import group from "src/images/group.png";
import duffle from "src/images/Duffle.png";
import { useDisclosure } from "@chakra-ui/react";
import AccountModal from "@/components/NewWallet/AccountModal";
import {
  useProvider,
  useSigner,
  useContractRead,
  useAccount,
  useContractWrite,
} from "wagmi";
import splitz from "src/pages/splitz.json";
import { useEffect, useState } from "react";
import { useBalance } from "wagmi";
import HomeHeader from "src/components/HomeHeader";

const Pay = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <HomeHeader />
      <section>
        <div className="flex items-center justify-center mt-44 font-Roboto pb-5">
          <h1 className="pt-32 text-5xl text-center mb-5 ">
            WHAT WOULD YOU LIKE TO DO?
          </h1>
        </div>
        <div className="flex items-center justify-center space-x-2 sm:space-x-24">
          <button className="bg-[#D9D9D9] text-black px-5 py-2 font-Roboto font-normal mb-5">
            CREATE GROUP
          </button>
          <Link href="/createballot">
            <button className="bg-[#D9D9D9] text-black px-5 py-2 font-Roboto font-normal mb-5">
              CREATE BALLOT
            </button>
          </Link>
          <button className="bg-[#D9D9D9] text-black px-5 py-2 font-Roboto font-normal mb-5">
            VIEW GROUPS
          </button>
        </div>
      </section>
    </div>
  );
};

export default Pay;
