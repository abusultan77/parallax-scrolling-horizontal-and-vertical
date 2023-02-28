import { useCallback } from "react";
import useWeb3 from "../useWeb3";
import environment from "../../utils/Environment";
import { getMintContract } from "../../utils/contractHelpers";

export const CheckURI = () => {
  const web3 = useWeb3();
  const tokenAddress = environment.MintContract;
  const contract = getMintContract(tokenAddress, web3);
  const TokenURI = useCallback(async (token) => {
    const approved = await contract.methods.tokenURI(token).call();
    return approved;
  }, [contract]);

  return { TokenURI: TokenURI };
};

export default CheckURI;