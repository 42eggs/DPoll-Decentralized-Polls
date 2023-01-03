const { ethers, run, network } = require("hardhat")

async function main() {
    const DPollFactory_Factory = await ethers.getContractFactory("DPollFactory")
    const DPollFactory = await DPollFactory_Factory.deploy()
    await DPollFactory.deployed()
    console.log("Factory Contract deployed to: %s\n", DPollFactory.address)

    const sampleArgs = [
        "title",
        "description",
        ["option1", "option2"],
        [ethers.utils.getAddress("0xae342B687375b26D8D824B691A5cB600A041243E")],
        1677829000,
        1677829614,
    ]
    const DPollResponse = await DPollFactory.createPoll(...sampleArgs)
    const DPollReceipt = await DPollResponse.wait()
    const [DPollEvent] = DPollReceipt.events
    const { dpoll_address } = DPollEvent.args
    console.log("Contract deployed to: %s\n", dpoll_address)

    if (network.config.chainId === 80001 && process.env.POLYGONSCAN_API_KEY) {
        await DPollFactory.deployTransaction.wait(20)
        await verify(DPollFactory.address, [])
        await verify(dpoll_address, [
            ...sampleArgs,
            ethers.utils.getAddress(
                "0xae342B687375b26D8D824B691A5cB600A041243E"
            ),
        ])
    }
}

async function verify(contractAddress, args) {
    console.log("Verifying...\n")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified")
        } else {
            console.log(e)
        }
    }
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
