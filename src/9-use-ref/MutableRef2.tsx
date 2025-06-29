import {useRef, useState, useEffect} from 'react';

export default function MutableRef2() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef<number | null>(null);

    const stopTimer = () => {
        if (intervalRef.current) {
            window.clearInterval(intervalRef.current);
        }
    }

    useEffect(() => {

        intervalRef.current = window.setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000);

        return () => stopTimer();

    }, [])

    return (
        <div>
            <h2>Timer - {timer}</h2>
            <button onClick={stopTimer}>Stop Timer</button>
        </div>
    )
}