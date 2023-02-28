import { useCallback } from "react";
import useWeb3 from "../useWeb3";
import environment from "../../utils/Environment";
import { addNfts } from "../../utils/contractHelpers";

const AddNFTs = () => {
  const web3 = useWeb3();
  const tokenAddress = environment.DesignDao;
  const contract = addNfts(tokenAddress, web3);
  const AddNfts = useCallback(
    async (account, contentList) => {
      // let nd = 1000000000000000000000;
      // nd = web3.utils.toWei(nd.toString(), "ether");
      // console.log("nddddd",nd)
      try {
        const gas = await contract.methods.addNfts(contentList).estimateGas({from:account });
        const details = await contract.methods.addNfts(contentList).send({
          from: account,
          gas,
        });
        return details;
      } catch (error) {
        throw error;
      }
    },
    [contract]
  );
  return { AddNfts: AddNfts };
};
export default AddNFTs;
