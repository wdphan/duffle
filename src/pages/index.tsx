import React from "react";
// import Header from '@/components/Header'
import Image from "next/image";
import ConnectButton from "@/components/NewWallet/ConnectButton";
import Link from "next/link";
import Modal from "@/components/Modals_Buttons/QuestionsModal";
import Arrow from "images/Arrow.png";
import Addresses from "@/components/AddressList/Addresses";
import Layout from "@/components/NewWallet/Layout";
import Head from "next/head";
import { useDisclosure } from "@chakra-ui/react";
import AccountModal from "@/components/NewWallet/AccountModal";
import { FC } from "react";
import graphic from "src/images/graphic.png";
import Header from "@/components/Header";

const Home: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="bg-black flex flex-col -z-9 pt-24">
        <div className=" -z-9 pl-20 pr-10 lg:ml-[38rem] lg:max-w-3xl lg:mt-[-1rem]">
          <Image src={graphic} alt="graphic " className="animate-pulse -z-9 " />
        </div>
        <div className="bg-black text-white mt-[-8rem] text-[3.25rem] z-90 leading-none flex items-center justify-center font-aldrich lg:pl-[-25rem] lg:pt-[-26rem] lg:text-8xl ">
          INSTANT <br /> COMMUNITIES. <br /> INSTANT <br /> EXPERIENCES.
        </div>
        <div>{/* <Footer/> */}</div>
      </div>
    </div>
  );
};

export default Home;
