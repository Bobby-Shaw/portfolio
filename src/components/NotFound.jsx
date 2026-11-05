import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="w-dvw h-dvh flex flex-col items-center">
            <h1 className="m-2xl">Project Not Found</h1>
            <p className="text-lg">Click <span><Link to={"/"}><span className="underline">here</span></Link></span> to go back</p>
        </div>
    )
}