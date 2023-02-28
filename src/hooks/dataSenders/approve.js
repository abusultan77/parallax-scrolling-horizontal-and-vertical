import { useCallback } from "react";
import useWeb3 from "../useWeb3";
import environment from "../../utils/Environment";
import { getTomiContract } from "../../utils/contractHelpers";

const AmountApprove = () => {
    const web3 = useWeb3();
    const tokenAddress = environment.TomiContract;
    const contract = getTomiContract(tokenAddress, web3);
    const UserApprove = useCallback(
        async (account) => {
            // let nd = 1000000000000000000000;
            // nd = web3.utils.toWei(nd.toString(), "ether");
            // console.log("nddddd",nd)
            try {
                const details = await contract.methods
                    .approve(environment.DoaContract, '1000000000000000000000')
                    .send({
                        from: account,
                    })
                return details;
            } catch (error) {
                throw (error)
            }
        },
        [contract]
    );
    return { UserApprove: UserApprove };
};
export default AmountApprove;