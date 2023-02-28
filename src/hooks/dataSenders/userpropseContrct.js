import { useCallback } from "react";
import useWeb3 from "../useWeb3";
import environment from "../../utils/Environment";
import { getproposalContract, getTomiDappContract, getTomiContract } from "../../utils/contractHelpers";
import { parseHTML } from "jquery";
const UserProposalInteraction = () => {
    const web3 = useWeb3();
    const contractAddress = environment.DoaContract;
    const contract = getproposalContract(contractAddress, web3);
    const UserProposeContrct = useCallback(
        async (targets, values, signatures, description , title,address,methods2,inputs, account) => {
            const contractAddress1 = address;
            let contract1 =''
            // let ab = inputs.toString()
            // ab= parseInt(ab)
            if(address === '0xC8cDEEB67d553466861E53a0f5A009bd756Ad140'){
                contract1 = getTomiContract(contractAddress1, web3);
            }else if(address === '0xDB8e9d97D000c5922B678E4660E44e84375d3099'){
                contract1 = getTomiDappContract(contractAddress1, web3);
            }
          
          const calldatas =[await contract1.methods[methods2](...inputs).encodeABI()];
        //   let a = [calldatas]
        //   let a= parseInt(calldatas)
        //   calldatas=[parseInt(calldatas)]
        //   console.log('detailed' , a)
            // let convertedvalue =[web3.utils.toWei(values.toString(), "ether")]
            try {
                // let gasPrice = await web3.eth.getGasPrice();
                const gas = await contract.methods
                    .propose(targets, values, signatures, calldatas, description, title).estimateGas({from: account})
                    const details = await contract.methods
                    .propose(targets, values, signatures, calldatas, description, title)
                    .send({
                        from: account,
                        // gas,
                        // gasPrice:gasPrice
                    })
                return details;
            } catch (error) {
                throw (error)
            }
        },     
        [contract]
    );
    return { UserProposeContrct: UserProposeContrct };
};
export default UserProposalInteraction;