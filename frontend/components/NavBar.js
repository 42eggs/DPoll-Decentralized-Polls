import Link from "next/link"
export default function NavBar() {
    return (
        <div className="col-span-1 relative p-4 bg-black h-screen">
            <div className="flex flex-wrap flex-col space-y-12 p-6">
                <div className="text-2xl font-medium text-darkOrange hover:text-orange">
                    <Link href="/">Vote</Link>
                </div>
                <div className="text-2xl font-medium text-darkOrange hover:text-orange">
                    <Link href="/your-polls">Your Polls</Link>
                </div>
                <div className="text-2xl font-medium text-darkOrange hover:text-orange">
                    <Link href="/create-poll">Create a Poll</Link>
                </div>
            </div>
        </div>
    )
}
