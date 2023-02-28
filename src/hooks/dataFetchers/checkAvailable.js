import { useCallback } from "react";
import useWeb3 from "../useWeb3";
import environment from "../../utils/Environment";
import { getMintContract } from "../../utils/contractHelpers";

export const CheckNft = () => {
  const web3 = useWeb3();
  const tokenAddress = environment.MintContract;
  const contract = getMintContract(tokenAddress, web3);
  const CheckAvailableNft = useCallback(async (word) => {
    const approved = await contract.methods.isNftAvailable(word).call();
    return approved;
  }, [contract]);

  return { CheckAvailableNft: CheckAvailableNft };
};

export default CheckNft;
