import { useState } from "react";
import useGPA from "../hooks/useGPA";


export default function GPA() {
    const [name, setName] = useState("");
    const [credit, setCredit] = useState("");
    const [grade, setGrade] = useState("A+");

    const {
        subjects,
        result,
        addSubject,
        calculate,
        totalCredit
    } = useGPA();

    const add = () => {
        addSubject(name, credit, grade);
        setName("");
        setCredit("");
        setGrade("A+");
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-slate-700 text-2xl font-bold h-12 flex items-center justify-center mb-6">학점 계산기</h1>
            <div className="flex gap-2 justify-center">
                <input className="border-2 border-slate-400 rounded-md p-1 w-40"
                    type="text" placeholder="과목명" value={name} onChange={(e) => setName(e.target.value)} />
                <input className="border-2 border-slate-400 rounded-md p-1 w-20"
                    type="number" placeholder="학점" value={credit} onChange={(e) => setCredit(e.target.value)} />
                <select className="border-2 border-slate-400 rounded-md p-1"
                    value={grade} onChange={(e) => setGrade(e.target.value)}>
                    <option>A+</option>
                    <option>A0</option>
                    <option>B+</option>
                    <option>B0</option>
                    <option>C+</option>
                    <option>C0</option>
                    <option>D+</option>
                    <option>D0</option>
                    <option>F</option>
                </select>

                <button className="bg-slate-300 p-1 px-4 rounded-md"
                    onClick={add}>추가</button>
            </div>

            <div className="mt-4">
                <ul>
                    {subjects.map((subjects, index) => (
                        <li key={index}>
                            {subjects.name} | {subjects.credit}학점 | {subjects.grade}
                        </li>
                    ))}
                </ul>
            </div>

            <button className="bg-slate-300 p-1 px-4 rounded-md my-4 w-40"
                onClick={calculate}>학점 계산하기</button>

            {result && (
                <div>
                    <p>총 {totalCredit}학점</p>
                    <p>평균 학점: {result}</p>
                </div>
            )}
        </div>
    )
}