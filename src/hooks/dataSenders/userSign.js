import { useWeb3React } from "@web3-react/core";
import { useCallback } from "react";
import { getLibraryForSign } from "../../utils/web3React";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Web3 from 'web3';
export const Signature = (data) => {
  // const { account } = useWeb3React()
  const { account } = useWeb3React()
  var library = null;
  if (account) {
    library = getLibraryForSign(Web3.givenProvider);
  } else {
    // toast.error("you dont have metamask in your browser please change your browser or add metamask to proceed with the site ")
  }
  const sign = useCallback(async () => {
    if ((library && account)) {
      let signing = library
        .getSigner(account);
      try {
        let signature = await signing.signMessage(JSON.stringify({address : account , name : "Design Dao"}));

        toast.success(`${signature.substring(0, 6)}...${signature.substring(signature.length - 4)}`, {
          position: "top-right",
          autoClose: 2000,
        });
        // AddProfile({ walletAddress: data })
        return signature;
      }
      catch (error) {
        toast.error(error && error.message, {
          position: "top-right",
          autoClose: 2000,
        });
      }
    }
  }, [account, library, data])
  return { userSign: sign }
}
export default Signature