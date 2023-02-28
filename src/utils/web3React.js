import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { BscConnector } from '@binance-chain/bsc-connector'
import getNodeUrl from './getRpcUrl'
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { Web3Provider } from "@ethersproject/providers";


const ConnectorNames = {
    Injected: "injected",
    WalletConnect: "walletconnect",
    BSC: "bsc"
}

const POLLING_INTERVAL = 12000
const rpcUrl = getNodeUrl()
const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)

const injected = new InjectedConnector({ supportedChainIds: [chainId] })

const walletconnect = new WalletConnectConnector({
    rpc: { [chainId]: rpcUrl },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    pollingInterval: POLLING_INTERVAL,
})

const bscConnector = new BscConnector({ supportedChainIds: [chainId] })

const walletlink = new WalletLinkConnector({
    rpc: { [chainId]: rpcUrl },
    url: 'https://mainnet.infura.io/v3/6e516a50f8404231bcb030ce93cf466f',
    appName: "web3-react-demo"
});

export const connectorsByName = {
    [ConnectorNames.Injected]: injected,
    [ConnectorNames.WalletConnect]: walletconnect,
    [ConnectorNames.BSC]: bscConnector,
    coinbaseWallet: walletlink
}

export const getLibraryForSign = (provider) => {
    const library = new Web3Provider(provider);
    return library
}

export const getLibrary = (provider) => {
    return provider
}
