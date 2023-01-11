import { useMoralis } from "react-moralis"
import { useEffect } from "react"
import { ConnectButton } from "web3uikit"

export default function CCreatePoll() {
    return (
        <div className="col-span-5 container p-4 bg-black">
            <div className="flex flex-wrap flex-col items-center">
                <div className="mb-6 w-full">
                    <div className="text-2xl font-medium text-white mb-2">Title</div>
                    <input className="w-4/5"></input>
                </div>
                <div className="mb-6 w-full">
                    <div className="text-2xl font-medium text-white mb-2">Description</div>
                    <input className="w-4/5"></input>
                </div>
                <div className="mb-6 w-full">
                    <div className="text-2xl font-medium text-white mb-2">
                        Voters' Addresses (comma seperated values)
                    </div>
                    <input className="w-4/5"></input>
                </div>
                <div className="mb-6 w-full">
                    <div className="text-2xl font-medium text-white mb-2">
                        Vote' Options (comma seperated values)
                    </div>
                    <input className="w-4/5"></input>
                </div>
                <div className="mb-6 w-full">
                    <div className="text-2xl font-medium text-white mb-2">Start Date</div>
                    <input type="datetime-local"></input>
                </div>
                <div className="mb-6 w-full">
                    <div className="text-2xl font-medium text-white mb-2">End Date</div>
                    <input type="datetime-local"></input>
                </div>
                <div className="mb-10 flex justify-center">
                    <div className="text-3xl px-6 font-bold text-white bg-darkOrange hover:bg-orange p-4 cursor-pointer">
                        Submit
                    </div>
                </div>
            </div>
        </div>
    )
}
