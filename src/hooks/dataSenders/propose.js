import { useCallback } from "react";
import useWeb3 from "../useWeb3";
import environment from "../../utils/Environment";
import { getproposalContract } from "../../utils/contractHelpers";
const UserProposal = () => {
    const web3 = useWeb3();
    const contractAddress = environment.DoaContract;
    const contract = getproposalContract(contractAddress, web3);
    const UserPropose = useCallback(
        async (targets, values, signatures, calldatas, description , title, account) => {
            // let convertedvalue =[web3.utils.toWei(values.toString(), "ether")]
            try {
                let gasPrice = await web3.eth.getGasPrice();
                const gas = await contract.methods
                    .propose(targets, values, signatures, calldatas, description, title).estimateGas({from: account})
                    const details = await contract.methods
                    .propose(targets, values, signatures, calldatas, description, title)
                    .send({
                        from: account,
                        gas,
                        gasPrice:gasPrice
                    })
                return details;
            } catch (error) {
                throw (error)
            }
        },     
        [contract]
    );
    return { UserPropose: UserPropose };
};
export default UserProposal;