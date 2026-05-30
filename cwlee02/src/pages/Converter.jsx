import { useState } from "react"

export default function Converter() {
    const [cm, setCm] = useState("");
    const [inch, setInch] = useState("");

    const Convert = () => {
        const inch = (cm / 2.54);
        setInch(inch.toFixed(2));
    }
    return (
        <div>
            <h1 className="text-slate-700 text-2xl font-bold h-12 flex items-center justify-center mb-6">inch 변환기</h1>
            <div className="flex gap-4 justify-center">
                <input className="border-2 border-slate-400 rounded-md p-1"
                    value={cm} placeholder="cm입력" onChange={(e) => setCm(e.target.value)} />
                <button className="bg-slate-300 p-1 px-4 rounded-md"
                    onClick={Convert}>변환하기</button>
            </div>
            {inch && (
                <p className="text-center mt-10">{cm} cm = {inch} inch</p>
            )}
        </div>
    )
}