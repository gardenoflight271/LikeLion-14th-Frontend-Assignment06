import { NavLink } from "react-router-dom"

export default function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <NavLink to="/">홈으로 이동</NavLink >
        </div>
    )
}