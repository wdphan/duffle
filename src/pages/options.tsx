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
      <div className="absolute top-6 right-6">
        <ConnectButton handleOpenModal={undefined} />
      </div>
      <Link href="/">
        <a className="font-Roboto max-w-7xl text-2xl font-bold absolute top-6 left-6">
          DUFFLE
        </a>
      </Link>
      <section className="flex flex-col items-center min-h-screen justify-center">
        <div className="font-Roboto">
          <h1 className=" text-5xl text-center pb-10 max-w-xl leading-snug">
            WHAT WOULD YOU LIKE TO DO?
          </h1>
        </div>
        <div className="flex flex-col md:flex md:flex-row  max-w-sm md:max-w-xl md:space-x-10">
          <div className="flex flex-col">
            <div className="flex items-center justify-center space-x-6 sm:space-x-6 mb-10">
              Group It offers Free voting Upgradability to Governor Centralized
              membership using link invitations Managing treasury with Gnosis
              Safe It requires Nothing. It’s free and easy Best for Communities
              on the path to decentralization with a shared treasury Inviting
              members and start voting on ideas
            </div>
            <Link href="/search">
              <button className="bg-[#D9D9D9] text-black px-5 py-2 font-Roboto font-normal mb-5 ">
                CREATE A FORUM
              </button>
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-center space-x-6 sm:space-x-6 mb-10">
              Group It offers Free voting Upgradability to Governor Centralized
              membership using link invitations Managing treasury with Gnosis
              Safe It requires Nothing. It’s free and easy Best for Communities
              on the path to decentralization with a shared treasury Inviting
              members and start voting on ideas
            </div>
            <Link href="/view">
              <button className="bg-[#D9D9D9] text-black px-5 py-2 font-Roboto font-normal mb-5">
                VIEW FORUMS
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pay;
