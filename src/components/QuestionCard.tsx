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

// INDIVIDUAL FORUM PAGES
export const QuestionCard = () => {
  return (
    <div className="flex flex-col max-w-md">
      <div className="flex flex-col content-start items-start py-5 p-2 border-2">
        <div className="flex flex-col content-start items-start ">
          <div className="">S16 - FDD Budget Proposal</div>
          <div className="">ID:44</div>
        </div>
      </div>
      <div>TREASURY FUNDS</div>
      <div className="flex flex-col content-start items-start py-5 p-2 border-2">
        <div className="">0x57a8865cfB1eCEf7253c27da6B4BC3dAEE5Be518</div>
        <div className="">Use this address to fund the DAO Treasury</div>
      </div>
    </div>
  );
};
