const hre = require("hardhat");

async function main() {
    const DPollFactoryContractFactory = await hre.ethers.getContractFactory("DPollFactory");
    const DPollFactoryContract = await DPollFactoryContractFactory.deploy();
    await DPollFactoryContract.deployed();
    console.log("Contract deployed to: %s\n", DPollFactoryContract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
