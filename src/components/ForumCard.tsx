import { networkInterfaces } from "os";
import Link from "next/link";
import Image from "next/image";
import link from "src/images/link.png";
import { IAddress } from "@/components/AddressList/Interfaces/interfaces.js";
import Address from "src/components/AddressList/Address";
import { useContractWrite } from "wagmi";
import splitz from "src/pages/splitz.json";
import {
  useAccount,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { QuestionCard } from "./QuestionCard";

// INDIVIDUAL FORUM PAGES
export const ForumCard = () => {
  return (
    <div className="flex flex-col max-w-md">
      <div className="flex flex-col y-gap-2 px-2 py-3">
        <p className="text-black font-Inter">Gitcoin</p>
        <p className="text-black font-Inter">
          We enable communities to build and fund their shared needs. Help us
          build a regenerative crypto economic world.
        </p>
        <div className="flex flex-row justify-center space-x-5 items-center border-2 py-5 p-2">
          <div className="flex flex-col justify-center  items-center py-5 p-2">
            <div>44</div>
            <div>Proposals</div>
          </div>
          <div className="flex flex-col justify-center  items-center py-5 p-2">
            <div>24.23K</div>
            <div>Holders</div>
          </div>
          <div className="flex flex-col justify-center  items-center py-5 p-2">
            <div>6.17K</div>
            <div>Voters</div>
          </div>
        </div>
        <h1 className="text-2xl">Proposals</h1>
        <QuestionCard />
      </div>
    </div>
  );
};
