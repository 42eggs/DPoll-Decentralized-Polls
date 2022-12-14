import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Vote from "../components/Vote"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <>
            <Header name={"Vote"} />
            <div className="grid grid-cols-6">
                <NavBar />
                <Vote />
            </div>
        </>
    )
}
