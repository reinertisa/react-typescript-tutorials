import {useRef, useEffect, useState} from 'react';

export default function MutableRef1() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef<number | undefined>(undefined);

    const stopTimer = () => {
        window.clearInterval(intervalRef.current);
    }

    useEffect(() => {

        intervalRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000)

        return () => stopTimer();

    }, [])

    return (
        <div>
            Hook timer - {timer} -
            <button onClick={stopTimer}>Stop Timer</button>
        </div>
    )
}