import { FC } from "react";
import { BookOpenIcon, CodeIcon, ShareIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { NFTCard } from "src/components/NFTCard";
import Header from "@/components/HomeHeader";
import ConnectButton from "@/components/NewWallet/ConnectButton";
import Link from "next/link";
import { ForumCard } from "@/components/ForumCard";

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
          <h1 className="mb-10 text-[2.5rem] max-w-md sm:max-w-2xl text-center font-Roboto font-normal leading-snug text-black">
            EXPLORE FORUMS
          </h1>
          <div>
            {/* basically loop through forums and their cards here */}
            <ForumCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForum;
