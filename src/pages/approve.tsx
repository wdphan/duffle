import { FC } from "react";
import { BookOpenIcon, CodeIcon, ShareIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { NFTCard } from "src/components/NFTCard";
import Header from "@/components/HomeHeader";
import ConnectButton from "@/components/NewWallet/ConnectButton";
import Link from "next/link";

const Approve = () => {
  const [wallet, setWalletAddress] = useState("");
  const [collection, setCollectionAddress] = useState("");
  const [NFTs, setNFTs] = useState([]);
  const [fetchForCollection, setFetchForCollection] = useState(false);

  const fetchNFTs = async () => {
    let nfts;
    console.log("fetching nfts");
    const api_key = "A8A1Oo_UTB9IN5oNHfAc2tAxdR4UVwfM";
    const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTs/`;

    if (!collection.length) {
      var requestOptions = {
        method: "GET",
      };
      const fetchURL = `${baseURL}?owner=${wallet}`;
      nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());
    } else {
      let requestOptions: undefined = undefined;
      console.log("fetching nfts for collection owned by address");
      const fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`;
      nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());
    }

    if (nfts) {
      console.log("nfts:", nfts);
      setNFTs(nfts.ownedNfts);
    }
  };

  const fetchNFTsForCollection = async () => {
    if (collection.length) {
      var requestOptions = {
        method: "GET",
      };
      const api_key = "A8A1Oo_UTB9IN5oNHfAc2tAxdR4UVwfM";
      const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTsForCollection/`;
      const fetchURL = `${baseURL}?contractAddress=${collection}&withMetadata=${"true"}`;
      const nfts = await fetch(fetchURL, requestOptions).then((data) =>
        data.json()
      );
      if (nfts) {
        console.log("NFTs in collection:", nfts);
        setNFTs(nfts.nfts);
      }
    }
  };

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
            ADD ADDRESSES TO YOUR NEW GROUP WITH A COUPLE CLICKS
          </h1>
          <div className="flex max-w-md space-x-2">
            <input
              disabled={fetchForCollection}
              className="w-1/2 border-2 border-[#D9D9D9] py-2 px-2  text-[#EFEFEF]focus:outline-blue-300 mt-4 placeholder:italic "
              onChange={(e) => {
                setWalletAddress(e.target.value);
              }}
              value={wallet}
              type={"text"}
              placeholder="WALLET ADDRESS"
            ></input>
            <input
              className="w-1/2  py-2 px-2 border-[#D9D9D9] text-black focus:outline-blue-300 mt-4 border-2 placeholder:italic"
              onChange={(e) => {
                setCollectionAddress(e.target.value);
              }}
              value={collection}
              type={"text"}
              placeholder="COLLECTION ADDRESS"
            ></input>
          </div>
          <label className=" text-black mt-4 font-Roboto">
            <input
              onChange={(e) => {
                setFetchForCollection(e.target.checked);
              }}
              type={"checkbox"}
              className="mr-2 bg-black text-black"
            ></input>
            FETCH FOR COLLECTION
          </label>
          <div className="flex max-w-md space-x-2 my-5">
            <div className="flex flex-row items-center justify-center">
              <button
                className={" text-black font-inter bg-[#D9D9D9] px-5 py-2  "}
                onClick={() => {
                  if (fetchForCollection) {
                    fetchNFTsForCollection();
                  } else fetchNFTs();
                }}
              >
                SEARCH
              </button>
            </div>
            <button
              className={" text-black font-inter bg-[#D9D9D9] px-5 py-2  "}
            >
              CREATE NEW GROUP
            </button>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col items-center justify-center w-1/2">
            {/* <div>FETCHED ADDRESSES</div> */}
            <div className="text-center font-Roboto w-full">
              FETCHED ADDRESSES
            </div>
            <div className="flex flex-row flex-wrap gap-y-1 mt-4 w-5/6 gap-x-10 justify-center ">
              {NFTs.length &&
                NFTs.map((nft) => {
                  return <NFTCard key={NFTs.length} nft={nft}></NFTCard>;
                })}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2">
            {/* <div>FETCHED ADDRESSES</div> */}
            <div className="font-Roboto">ADDED RECIPIENTS</div>
            <div className="flex flex-row flex-wrap gap-y-1 mt-4 w-5/6 gap-x-10 justify-center ">
              {NFTs.length &&
                NFTs.map((nft) => {
                  return <NFTCard key={NFTs.length} nft={nft}></NFTCard>;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approve;
