import { NavLink } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-red-500 text-6xl h-12 flex items-center justify-center mb-6 p-20">404 error</h1>
            <NavLink className="bg-slate-300 p-1 px-4 rounded-md items-end"
                to="/">홈으로 이동</NavLink >
        </div>
    )
}