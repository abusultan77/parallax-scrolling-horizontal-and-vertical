import { useCallback } from "react";
import useWeb3 from "../useWeb3";
import environment from "../../utils/Environment";
import { getproposalContract } from "../../utils/contractHelpers";
const UserVote = () => {
    const web3 = useWeb3();
    const contractAddress = environment.DoaContract;
    const contract = getproposalContract(contractAddress, web3);
    const voted = useCallback(
        async (id,support, account) => {
            try {
                let gasPrice = await web3.eth.getGasPrice();
                // const gas = await contract.methods
                //     .castVote(id, support).estimateGas({from: account})
                    const details = await contract.methods
                    .castVote(id, support)
                    .send({
                        from: account,
                        // gas,
                        gasPrice:gasPrice
                    })
                return details;
            } catch (error) {
                throw (error)
            }
        },     
        [contract]
    );
    return { voted: voted };
};
export default UserVote;