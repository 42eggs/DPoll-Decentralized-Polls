import { useMoralis } from "react-moralis"
import { useEffect } from "react"
import { ConnectButton } from "web3uikit"
import DisplayPoll from "./DisplayPoll"

export default function Vote() {
    return (
        <div className="col-span-5 container p-4 bg-black">
            <DisplayPoll />
        </div>
    )
}
