import { NFT } from "@/constants/types";
type NFTCardProps = {
  item: NFT;
  handleClick: () => void;
};

const NFTCard = ({ item, handleClick }: NFTCardProps) => {
  return (
    <div className="border p-3 cursor-pointer" onClick={handleClick}>
      <h2 className="text-lg font-bold">{item.name}</h2>
      <p>Amount: {item.amount ?? 0}</p>
      <p>Symbol: {item.symbol}</p>
    </div>
  );
};

export default NFTCard;
