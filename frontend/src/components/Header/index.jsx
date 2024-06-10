import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

const Header = () => {
  const projectId = "YOUR_PROJECT_ID";

  const mainnet = {
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://cloudflare-eth.com",
  };

  const metadata = {
    name: "Leauge Predictions",
  };

  const ethersConfig = defaultConfig({
    metadata,
  });

  createWeb3Modal({
    ethersConfig,
    chains: [mainnet],
    projectId,
    enableAnalytics: true,
  });

  return (
    <header className="fixed w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-gray-800">MyLogo</div>
        <w3m-button />
      </div>
    </header>
  );
};

export default Header;
