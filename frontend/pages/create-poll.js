import { Inter } from "@next/font/google"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import CCreatePoll from "../components/CCreatePoll"

const inter = Inter({ subsets: ["latin"] })

export default function CreatePoll() {
    return (
        <>
            <Header name={"Create Poll"} />
            <div className="grid grid-cols-6">
                <NavBar />
                <CCreatePoll />
            </div>
        </>
    )
}
