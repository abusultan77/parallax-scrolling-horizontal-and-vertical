import web3NoAccount from "./web3";
import tomiTokenAbi from "./tomiTokenAbi.json";
import icoAbi from "./icoAbi.json";
const getContract = (abi, address, web3) => {
  const _web3 = web3 ?? web3NoAccount;
  // console.log('_web3',_web3);s
  return new _web3.eth.Contract(abi, address);
};

export const icoContract = (address, web3) => {
  return getContract(icoAbi, address, web3);
};
export const tomiTokenContract = (address, web3) => {
  return getContract(tomiTokenAbi, address, web3);
};

// export const getExpireTime= (address, web3) => {
//   return getContract(DesignDao, address, web3);
// };

// export const getTomiTokensContract = (address, web3) => {
//     return getContract(tomiToken, address, web3)
// }

// export const getUSDTContract = (address, web3) => {
//     return getContract(USDTAbi, address, web3)
// }

// export const getUSDTMainContract = (address, web3) => {
//     return getContract(USDTMainAbi, address, web3)
// }
