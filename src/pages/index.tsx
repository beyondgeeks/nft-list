import { useEffect, useState } from "react";
import Head from "next/head";

import { getNFTs } from "@/api/api";
import NFTCard from "@/components/NFTCard";
import NFTModal from "@/components/NFTModal";
import { NFT } from "@/constants/types";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [nfts, setNFTs] = useState<NFT[]>([]);
  const [showModal, setModal] = useState<boolean>(false);
  const [selectedItem, setSelected] = useState<NFT | null>(null);

  useEffect(() => {
    (async function () {
      const response = await getNFTs();
      const { result } = response.toJSON();
      if (result) {
        setNFTs(result);
      }
    })();
  }, []);

  const handleClick = (item: NFT) => {
    setSelected(item);
    setModal(true);
  };

  return (
    <>
      <Head>
        <title>NFT List</title>
      </Head>
      <main className={styles.main}>
        <h1 className="mt-5 text-center text-3xl font-bold">NFT List</h1>
        <div className="grid gap-5 md:grid-cols-3 sm:grid-cols-2 mt-5">
          {nfts?.map((nft, index) => (
            <NFTCard
              key={`${nft.token_id}${index}`}
              item={nft}
              handleClick={() => handleClick(nft)}
            />
          ))}
        </div>
        {showModal && selectedItem && (
          <NFTModal item={selectedItem} handleClose={() => setModal(false)} />
        )}
      </main>
    </>
  );
}
