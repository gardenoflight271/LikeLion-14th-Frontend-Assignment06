import { useState } from "react";

export default function useGPA() {
    const [subjects, setSubjects] = useState([]);
    const [result, setResult] = useState("");
    const [totalCredit, setTotalCredit] = useState(0);

    const addSubject = (name, credit, grade) => {
        setSubjects([...subjects, { name, credit: Number(credit), grade }]);
    };

    const calculate = () => {
        let creditSum = 0;
        let scoreSum = 0;

        subjects.forEach(subject => {
            scoreSum += subject.credit * gradeTable[subject.grade];
            creditSum += subject.credit;
        });

        setResult((scoreSum / creditSum).toFixed(2));
        setTotalCredit(creditSum);
    };

    const gradeTable = {
        "A+": 4.5,
        "A0": 4.0,
        "B+": 3.5,
        "B0": 3.0,
        "C+": 2.5,
        "C0": 2.0,
        "D+": 1.5,
        "D0": 1.0,
        "F": 0
    };

    return {
        subjects,
        result,
        addSubject,
        calculate,
        totalCredit
    };
}