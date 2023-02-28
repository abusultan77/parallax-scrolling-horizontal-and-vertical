

import { useCallback, useState } from "react";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { addNfts } from "../utils/contractHelpers";
import { useWeb3React } from "@web3-react/core";

const DesignDaoNftStore = () => {

  const [balance, setBalance] = useState(null)
  const { account } = useWeb3React();
  const web3 = useWeb3();
  const tokenAddress = environment.DesignDao;
  const contract = addNfts(tokenAddress, web3);


  const designDaoNftStore = useCallback(
    async (a) => {
      try {
        const buy = await contract.methods.nftStore(a).call()
        return buy;
      } catch (error) {
        throw error;
      }
    },
    [contract, account]
  );
  return { designDaoNftStore: designDaoNftStore };
};
export default DesignDaoNftStore;