import { useCallback, useState } from "react";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { addNfts } from "../utils/contractHelpers";
import { useWeb3React } from "@web3-react/core";

export const NftWinnerExpireTime = () => {

  const [balance, setBalance] = useState(0)
  const { account } = useWeb3React();
  const web3 = useWeb3();
  const tokenAddress = environment.DesignDao;
  const contract = addNfts(tokenAddress, web3);


  const nftWinnerExpireTime = useCallback(
    async () => {
      try {
        const expireTime = await contract.methods.timer().call()
        return expireTime;
      } catch (error) {
        throw error;
      }
    },
    [contract, account]
  );
  return { nftWinnerExpireTime: nftWinnerExpireTime };
};
export default NftWinnerExpireTime;