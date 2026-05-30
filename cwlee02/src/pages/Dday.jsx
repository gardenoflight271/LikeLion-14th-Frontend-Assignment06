import useDday from "../hooks/useDday";

export default function Dday() {
    const { date, setDate, result, calculate } = useDday();
    return (
        <div>
            <h1 className="text-slate-700 text-2xl font-bold h-12 flex items-center justify-center mb-6">D-Day 계산기</h1>
            <div className="flex gap-4 justify-center">
                <input className="border-2 border-slate-400 rounded-md p-1"
                    type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <button className="bg-slate-300 p-1 px-4 rounded-md"
                    onClick={calculate}>
                    계산하기
                </button>
            </div>
            {result && (
                <p className="text-center mt-10 text-4xl">{result}</p>
            )}
        </div>
    )
}