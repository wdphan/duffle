import React from "react";
// import Header from '@/components/Header'
import Image from "next/image";
import ConnectButton from "@/components/NewWallet/ConnectButton";
import Link from "next/link";
import Duffle from "src/images/Duffle.png";
import Addresses from "@/components/AddressList/Addresses";
import Layout from "@/components/NewWallet/Layout";
import Head from "next/head";
import { useDisclosure } from "@chakra-ui/react";
import AccountModal from "@/components/NewWallet/AccountModal";
import { FC } from "react";
import graphic from "src/images/graphic.png";
import Header from "@/components/HomeHeader";
import Footer from "@/components/Footer";

const Home: FC = () => {
  return (
    <div>
      <div className="">
        <Header />
      </div>

      <div className="relative min-h-screen bg-white flex items-center justify-center max-w-md sm:max-w-full">
        <div className="max-w-7xl ">
          <h1 className="mb-10 font-Roboto font-normal text-[2.5rem] sm:max-w-2xl sm:text-5xl sm:leading-snug text-black leading-snug ">
            DUFFLE IS COMMUNITY INFRA FOR WEB3. ENTER & CREATE YOUR OWN
            COMMUNITY IN MINUTES.
          </h1>

          <div className="">
            <Link href="/options">
              <button className="bg-[#D9D9D9] text-black px-5 py-2 font-Roboto font-normal">
                ENTER APP
              </button>
            </Link>
            <div className="ml-[30em] mt-[-4.5em] hidden sm:block md:block ">
              <Image
                src={Duffle}
                alt="Picture"
                width={170}
                height={150}
                className="animate-spin-slow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
