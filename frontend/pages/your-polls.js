import { Inter } from "@next/font/google"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import CYourPolls from "../components/CYourPolls"

const inter = Inter({ subsets: ["latin"] })

export default function YourPolls() {
    return (
        <>
            <Header name={"Your Polls"} />
            <div className="grid grid-cols-6">
                <NavBar />
                <CYourPolls />
            </div>
        </>
    )
}
