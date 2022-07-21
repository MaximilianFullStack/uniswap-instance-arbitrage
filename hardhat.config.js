require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("hardhat-deploy")
require("hardhat-contract-sizer")

const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL

module.exports = {
    solidity: {
        compilers: [
            { version: "0.5.0" },
            { version: "0.6.2" },
            { version: "0.6.0" },
            { version: "0.6.12" },
            { version: "0.4.19" },
        ],
    },
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            mining: {
                auto: true,
                interval: [3000, 6000],
            },
            chainId: 31337,
            forking: {
                url: MAINNET_RPC_URL,
                // blockNumber: 13292066,
            },
        },
    },

    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
}
