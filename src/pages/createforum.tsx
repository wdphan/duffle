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
          <h1 className="mb-10 text-5xl max-w-md text-center font-Roboto font-normal leading-snug text-black">
            TELL US ABOUT YOUR FORUM
          </h1>
          <div className="max-w-7xl flex flex-col ">
            <div className="flex justify-start items-start font-Roboto ">
              FORUM NAME
            </div>
            <input
              disabled={fetchForCollection}
              className=" border-2 border-[#D9D9D9] py-2 w-[25rem] sm:w-[28rem] text-[#EFEFEF]focus:outline-blue-300 mt-4 placeholder:italic  "
              onChange={(e) => {
                setWalletAddress(e.target.value);
              }}
              value={wallet}
              type={"text"}
              placeholder=" TITLE NAME"
            ></input>
            <div className="flex justify-start items-start mt-4 font-Roboto ">
              FORUM DESCRIPTION
            </div>
            <div className="">
              <textarea
                className=" pb-44 w-[25rem] sm:w-[28rem] border-[#D9D9D9] text-black focus:outline-blue-300 mt-4 border-2 placeholder:italic text-wrap"
                onChange={(e) => {
                  setCollectionAddress(e.target.value);
                }}
                value={collection}
                placeholder=" MISSION STATEMENT"
              ></textarea>
            </div>
          </div>

          <div className="flex max-w-md space-x-2 my-5">
            <button
              className={" text-black font-Roboto  bg-[#D9D9D9] px-5 py-2 "}
            >
              CREATE NEW FORUM
            </button>
            <button
              className={" text-black  bg-[#D9D9D9] px-5 py-2 font-Roboto  "}
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