import { useState, useCallback } from "react";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { icoContract } from "../utils/contractHelpers";
import { useWeb3React } from "@web3-react/core";
const Getrate = () => {
  const [balance, setBalance] = useState(0);
  const web3 = useWeb3();
  const { account } = useWeb3React();
  const tokenAddress = environment.icoAddress;
  const contract = icoContract(tokenAddress, web3);
  const getRate = useCallback(async () => {
    try {
      const buy = await contract.methods.tokenPrice().call();
      const buy1 = buy / 10 ** 18;
      // console.log(buy1,'buy');

      return buy1;
    } catch (error) {
      console.log("error in buy usdc:::", error);
      throw error;
    }
  }, [contract]);
  return { getRate: getRate };
};
export default Getrate;
