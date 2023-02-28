import { useCallback, useState } from "react";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { addNfts } from "../utils/contractHelpers";
import { useWeb3React } from "@web3-react/core";

const DesignDaoWalletAddress = () => {

  const [balance, setBalance] = useState(null)
  const { account } = useWeb3React();
  const web3 = useWeb3();
  const tokenAddress = environment.DesignDao;
  const contract = addNfts(tokenAddress, web3);


  const designDaoWalletAddress = useCallback(
    async (amount) => {
      amount = amount.toString()
      try {
        const buy = await contract.methods.Committee(amount).call()
        return buy;
      } catch (error) {
        throw error;
      }
    },
    [contract, account]
  );
  return { designDaoWalletAddress: designDaoWalletAddress };
};
export default DesignDaoWalletAddress;