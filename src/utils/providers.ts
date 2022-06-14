import { StaticJsonRpcProvider } from '@ethersproject/providers'
import getRpcUrl from 'utils/getRpcUrl'

const RPC_URL = getRpcUrl()

export const simpleRpcProvider = new StaticJsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545")

export default null
