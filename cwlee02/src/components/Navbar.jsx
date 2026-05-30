import { NavLink } from "react-router-dom";

export default function Navbar() {
    const activeStyle = ({ isActive }) =>
        isActive ? "text-slate-400 font-bold" : "";

    return (
        <div className=" flex justify-around mb-6 pb-5 border-b-1 border-slate-300">
            < NavLink to="/" className={activeStyle} > Home</NavLink >
            <NavLink to="/Converter" className={activeStyle} >Converter</NavLink>
            <NavLink to="/Dday" className={activeStyle} >D-Day</NavLink>
            <NavLink to="/GPA" className={activeStyle} >GPA</NavLink>
        </div >
    );
}