import { useState } from "react";

export default function useDday() {
    const [date, setDate] = useState("");
    const [result, setResult] = useState("");

    const calculate = () => {
        const today = new Date();
        const target = new Date(date);

        const days = Math.ceil(((today - target) / (1000 * 60 * 60 * 24)) - 1);

        if (days < 0) {
            setResult(`D-${Math.abs(days)}`)
        }
        else if (days > 0) {
            setResult(`D+${days}`)
        }
        else {
            setResult("D-Day!");
        }
    };
    return {
        date,
        setDate,
        result,
        calculate
    };
}