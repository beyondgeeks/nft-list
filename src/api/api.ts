import { default as Moralis } from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

(async function () {
  if (!Moralis.Core.isStarted) {
    await Moralis.start({
      apiKey:
        "rTAgxPKqPsnFRknDd87JuLLn8eUCl8ZzDnmFRDKNCnLSykiUGqlYOjBEmQuX3jYe",
    });
  }
})();

const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";
const chain = EvmChain.ETHEREUM;

export const getNFTs = async () => {
  const result = await Moralis.EvmApi.nft.getWalletNFTs({
    address,
    chain,
  });
  return result;
};
