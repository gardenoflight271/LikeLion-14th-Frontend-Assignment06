import { Navigate, NavLink, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Converter from "./pages/Converter";
import Dday from "./pages/Dday";
import GPA from "./pages/GPA";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white w-120 h-130 rounded-2xl p-6 shadow-2xl shadow-slate-500">
        < Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Converter" element={<Converter />} />
          <Route path="/Dday" element={<Dday />} />
          <Route path="/GPA" element={<GPA />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div >
    </div>
  )
}