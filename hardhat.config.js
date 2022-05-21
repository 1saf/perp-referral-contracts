require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");
require('hardhat-abi-exporter');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    localhost: {
      url: "http://0.0.0.0:8545"
    },
    optimismkovan: {
      url: 'https://kovan.optimism.io'
    },
  },
  etherscan: {
    apiKey: "XHVB91EIPX3BP4SJ7K6XDBZ1C8IVYGB4VD"
  },
  solidity: "0.7.6",
  abiExporter: {
    path: './data/abi',
    clear: true,
    flat: true,
    spacing: 2
  }
};
