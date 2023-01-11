import { useMoralis } from "react-moralis"
import { useEffect } from "react"
import { ConnectButton } from "web3uikit"

export default function CYourPolls() {
    return (
        <div className="relative container mx-auto p-4">
            <div className="flex flex-wrap items-center justify-between">
                {/* Logo */}
                <div className="pt-2">
                    <img src="" alt="" />
                </div>
                {/* Vote/Your Polls/Create Poll */}
                <div>TextBox</div>
                {/* Connect Button */}
                <div>
                    <ConnectButton moralisAuth={false}></ConnectButton>
                </div>
            </div>
        </div>
    )
}
