import {useRef, useState, useEffect} from 'react';

export default function MutableRef3() {
    const [timer, setTimer] = useState<number>(0);
    const intervalRef = useRef<number | null>(null);
    const stopTimer = ():void => {
        if (intervalRef.current) {
            window.clearInterval(intervalRef.current);
        }
    }

    useEffect(() => {
        intervalRef.current = window.setInterval(() => setTimer(prev => prev + 1), 1000)
        return () => stopTimer();
    }, [])

    return (
        <div>
            <h2>Timer - {timer}</h2>
            <button onClick={stopTimer}>Stop</button>
        </div>
    )
}