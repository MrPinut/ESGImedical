import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";

function HomePage() {
  const chains = [arbitrum, mainnet, polygon];
  const projectId = "607c342fe55eeaa0275572f582aa6cd8";

  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  });
  const ethereumClient = new EthereumClient(wagmiConfig, chains);
  return (
    <div>
      <Web3Modal
        projectId="607c342fe55eeaa0275572f582aa6cd8"
        ethereumClient={ethereumClient}
      />
    </div>
  );
}
export default HomePage;
