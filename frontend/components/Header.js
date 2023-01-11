import { useMoralis } from "react-moralis"
import { useEffect } from "react"
import Image from "next/image"
import { ConnectButton } from "web3uikit"

export default function Header({ name }) {
    return (
        <div className="grid grid-cols-6 relative p-4 bg-black">
            <div className="col-span-1 w-4/6">
                <img src="/logo.svg" alt="me" />
            </div>
            <div className="col-span-5 flex flex-wrap items-center justify-between pl-2">
                <div className="text-white text-4xl font-bold tracking-wider">{name}</div>
                {/* Connect Button */}
                <div>
                    <ConnectButton moralisAuth={false}></ConnectButton>
                </div>
            </div>
        </div>
    )
}
