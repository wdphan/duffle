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

export const NFTCard = ({ nft }) => {
  const [address, setAddress] = useState<string>("");
  const [owner, setOwner] = useState<string>("");

  const [addressList, setAddressList] = useState<IAddress[]>([]);

  const addAddress = (): void => {
    const newAddress = { addressName: address }
    setAddressList([...addressList, newAddress])
    setAddress('')
}

const deleteAddress = (addressToDelete: string): void => {
    setAddressList(
        addressList.filter(address => {
            return address.addressName != addressToDelete
        })
    )
}

  return (
    <div className="w-48 flex flex-col">
      <div className="rounded-lg">
        <img className="object-cover w-full " src={nft.media[0].gateway}></img>
      </div>
      <div className="flex flex-row y-gap-2 px-2 py-3 ">
        <div className="">
          <p className="text-black font-Inter">
            Id: {nft.id.tokenId.substr(nft.id.tokenId.length - 4)}
          </p>
          <p className="text-black font-Inter">
            {`${nft.contract.address.substr(
              0,
              4
            )}...${nft.contract.address.substr(
              nft.contract.address.length - 4
            )}`}

            <Link href={`https://etherscan.io/token/${nft.contract.address}`}>
              <a>
                <Image
                  src={link}
                  alt="logo"
                  width="14"
                  height="14"
                  className="mr-2"
                />
              </a>
            </Link>
          </p>
          <div className="flex ">
            <button className="border-2 px-2 py-[.05rem] bg-[#D9D9D9] font-Inter">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
