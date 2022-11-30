import { FC } from "react";
import { BookOpenIcon, CodeIcon, ShareIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { NFTCard } from "src/components/NFTCard";
import Header from "@/components/HomeHeader";
import ConnectButton from "@/components/NewWallet/ConnectButton";
import Link from "next/link";

const CreateForum = () => {
  const [wallet, setWalletAddress] = useState("");
  const [collection, setCollectionAddress] = useState("");
  const [NFTs, setNFTs] = useState([]);
  const [fetchForCollection, setFetchForCollection] = useState(false);

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

      <div className="flex flex-col justify-center py-8 bg-white min-h-screen items-center ">
        <div className="flex flex-col w-full justify-center items-center gap-y-2">
          <h1 className="mb-2 text-3xl max-w-md text-center font-Roboto font-normal text-black">
            TELL US ABOUT YOUR FORUM
          </h1>
          <div className="max-w-md flex flex-col ">
            <div className="flex justify-start items-start">FORUM NAME</div>
            <input
              disabled={fetchForCollection}
              className=" border-2 border-[#D9D9D9] py-2 pr-44 text-[#EFEFEF]focus:outline-blue-300 mt-4 placeholder:italic  "
              onChange={(e) => {
                setWalletAddress(e.target.value);
              }}
              value={wallet}
              type={"text"}
              placeholder=" TITLE NAME"
            ></input>
            <div className="flex justify-start items-start mt-4 ">
              FORUM DESCRIPTION
            </div>
            <input
              className=" pb-44 pr-44 border-[#D9D9D9] text-black focus:outline-blue-300 mt-4 border-2 placeholder:italic "
              onChange={(e) => {
                setCollectionAddress(e.target.value);
              }}
              value={collection}
              type={"text"}
              placeholder=" MISSION STATEMENT"
            ></input>
          </div>

          <div className="flex max-w-md space-x-2 my-5">
            <div className="flex flex-row items-center justify-center"></div>
            <button
              className={" text-black font-inter bg-[#D9D9D9] px-5 py-2  "}
            >
              CREATE NEW FORUM
            </button>
            <button
              className={" text-black font-inter bg-[#D9D9D9] px-5 py-2  "}
            >
              ADD MEMBERS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForum;

// TODO:
// - this page
// program add all address from collection
// program add and delete recipients
// add create new group functionality

// fix wallet and its design
// create view ballot pages
