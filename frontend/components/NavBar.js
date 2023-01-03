import Link from "next/link"
export default function NavBar() {
    return (
        <div className="relative container my-auto p-4">
            <div className="hidden md:flex flex-wrap flex-col space-y-12 p-6">
                <div>Vote</div>
                <div>Your Polls</div>
                <div>Create Polls</div>
            </div>
        </div>
    )
}
