import { useCallback } from "react";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { icoContract } from "../utils/contractHelpers";
import { useWeb3React } from "@web3-react/core";

const BuyToken = () => {
  const { account } = useWeb3React();
  const web3 = useWeb3();
  const tokenAddress = environment.icoAddress;
  const contract = icoContract(tokenAddress, web3);
  let gasFunPrice;
  web3.eth.getGasPrice().then((result) => {
    var result2 = parseFloat(result) + 20;
    result2 = result2.toString();
    // console.log("gasfun",typeof result2, result2)
    gasFunPrice = web3.utils.toWei(result2, "ether");
  });
  const BuyTokens = useCallback(
    async (ethAmount, tokens) => {
      try {
        let nd = web3.utils.toWei(ethAmount.toString(), "ether");
        // let nd1 = web3.utils.toWei(tokens.toString(), "ether");

        let gasPrice = await web3.eth.getGasPrice();
        gasPrice = parseInt(gasPrice) + 5000000000;
        const gas = await contract.methods
          .buyTokens(tokens)
          .estimateGas({ from: account, gasPrice, value: nd });
        const buy = await contract.methods.buyTokens(tokens).send({
          from: account,
          value: nd,
          gas: gas,
          gasPrice,
        });
        return buy;
      } catch (error) {
        console.log("error in buy tokens", error);

        throw error;
      }
    },
    [contract]
  );
  return { BuyTokens: BuyTokens };
};
export default BuyToken;
