const { network } = require("hardhat")

DECIMALS = "8"
INITIAL_START = "200000000000"
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    if (chainId == 31337) {
        console.log("local network detected! deploying mocks...")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_START],
        })
        console.log("Mocks deployed!")
        console.log("------------------------------------")
    }
}
module.exports.tags = ["all", "mocks"]
