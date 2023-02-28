import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { getMintContract } from "../utils/contractHelpers";

export const TotalSupply = () => {
  const { account } = useWeb3React();
  const web3 = useWeb3();
  const tokenAddress = environment.MintContract;
  const contract = getMintContract(tokenAddress, web3);
  const Supply = useCallback(async () => {
    const details = await contract.methods.totalSupply().call();
    return details;
  }, [account, contract]);

  return { tSupply: Supply };
};

export default TotalSupply;
