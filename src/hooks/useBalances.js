import { useEffect, useState, useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import useWeb3 from './useWeb3';
import environment from '../utils/Environment';
import { getMintContract } from '../utils/contractHelpers'
import { getTomiContract } from '../utils/contractHelpers';
import {getproposalContract} from '../utils/contractHelpers'
import useRefresh from './useRefresh'

const useBalance = () => {

    const web3 = useWeb3();
    const tokenAddress = environment.MintContract;
    const contract = getMintContract(tokenAddress, web3);
    const CheckUserNft = useCallback(async (account) => {
        try {
            const approved = await contract.methods.balanceOf(account).call();
            return approved;
        } catch (error) {
        }
    }, [contract]);
    return { CheckUserNft: CheckUserNft };




}

const useBalanceUSDT = () => {
    const web3 = useWeb3();
    const tokenAddress = environment.TomiContract;
    const contract = getTomiContract(tokenAddress, web3);
    const CheckBalanceUsdt = useCallback(async (account) => {
        try{
            const approved = await contract.methods.balanceOf(account).call();
            return approved/10 **18;
        }catch(e){
            console.log("eeerrrrrr", e)
        }
       
    }, [contract]);

    return { CheckBalanceUsdt: CheckBalanceUsdt };
}

 const CheckAllowance = () => {
    const web3 = useWeb3();
    const tokenAddress = environment.TomiContract;
    const marketAddress = environment.DoaContract;
    const contract = getTomiContract(tokenAddress, web3);
    const CheckAllow = useCallback(async (account) => {
      const approved = await contract.methods.allowance(account, marketAddress).call();
      return approved/10**18;
    }, [contract]);
  
    return { CheckAllow: CheckAllow };
  };

  const UserData = (id) => {
    const [balance, setBalance] = useState()
    const web3 = useWeb3()
    const { fastRefresh } = useRefresh()
    const tokenAddress = environment.DoaContract;
    const contract = getproposalContract(tokenAddress, web3);
    useEffect(() => {
        const fetchBalance = async () => {
            const approved = await contract.methods.proposals(id).call()
            // console.log("userinf0::::::::::",approved)
            setBalance((approved))
        }
        fetchBalance()
    }, [tokenAddress,contract, web3, fastRefresh])

    return balance
    
      
  };

  const UserTreasure = () => {
    const [balance, setBalance] = useState(0)
    const web3 = useWeb3()
    const { fastRefresh } = useRefresh()
    const tokenAddress = environment.DoaContract;
    const contract1 = getproposalContract(tokenAddress, web3);
    useEffect(() => {
        const myTreasure = async () => {
            const approved = await contract1.methods.fundingWallet().call()
             if(approved){
                 const res = await web3.eth.getBalance(approved)
                 setBalance(res/10**18)
             }
            
        }
        // const fetchBalance = async () => {
        //     const approved = await contract.methods.proposals(id).call()
        //     setBalance((approved))
        // }
        myTreasure()
    }, [contract1, web3, fastRefresh])

    return balance
    
      
  };

  const UserVoteStatus = (id,account) => {
    const [balance, setBalance] = useState(0)
    const web3 = useWeb3()
    const { fastRefresh } = useRefresh()
    const tokenAddress = environment.DoaContract;
    const contract = getproposalContract(tokenAddress, web3);
    useEffect(() => {
        const myvotee = async () => {
            const approved = await contract.methods.getReceipt(id,account).call()
                 setBalance(approved)
            
        }
        // const fetchBalance = async () => {
        //     const approved = await contract.methods.proposals(id).call()
        //     setBalance((approved))
        // }
        myvotee()
    }, [web3, fastRefresh])

    return balance
    
      
  };

  const ProposalStatus = (id) => {
    const [balance, setBalance] = useState(0)
    const web3 = useWeb3()
    const { fastRefresh } = useRefresh()
    const tokenAddress = environment.DoaContract;
    const contract = getproposalContract(tokenAddress, web3);
    useEffect(() => {
        const myvotee = async () => {
            const approved = await contract.methods.state(id).call()
                 if(approved ==='0'){
                     setBalance('Pending')
                 }else if(approved === '1'){
                    setBalance('Active')
                 }else if(approved === '2'){
                    setBalance('Canceled')
                }else if(approved === '3'){
                    setBalance('Defeated')
                }else if(approved === '4'){
                    setBalance('Succeeded')
                }else if(approved === '5'){
                    setBalance('Queued')
                }else if(approved === '6'){
                    setBalance('Expired')
                }else if(approved === '7'){
                    setBalance('Executed')
                }else {
                    setBalance('Vetoed')
                }
            
        }
        // const fetchBalance = async () => {
        //     const approved = await contract.methods.proposals(id).call()
        //     setBalance((approved))
        // }
        myvotee()
    }, [web3, fastRefresh])

    return balance
    
      
  }


// const useUdtApprove = () => {
//     const web3 = useWeb3();
//     const tokenAddress = environment.TomiContract;
//     const contract = getTomiContract(tokenAddress, web3);
//     const CheckAvailableApprove = useCallback(async (account) => {
//         const approved = await contract.methods.balanceOf(account).call();
//         return approved;
//     }, [contract]);

//     return { CheckAvailableApprove: CheckAvailableApprove };
// }

export { useBalance, useBalanceUSDT, CheckAllowance, UserData , UserTreasure, UserVoteStatus, ProposalStatus};


