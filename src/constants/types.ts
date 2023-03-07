export type NFT = {
  token_address: string;
  token_id: string;
  contract_type: string;
  owner_of: string;
  block_number: string;
  block_number_minted: string;
  token_uri?: string | undefined;
  metadata?: string | undefined;
  amount?: string | undefined;
  name: string;
  symbol: string;
  last_token_uri_sync: string | null;
  last_metadata_sync: string;
  minter_address?: string | null;
};
