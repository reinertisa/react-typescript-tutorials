import {useState, useEffect} from 'react';

export default function Interval1() {
    const [timer, setTimer] = useState<number>(0);

    useEffect(() => {
        const intervalId: number = window.setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)

        return () => window.clearInterval(intervalId);
    }, [])

    return (
        <div>
            <span>timer - {timer}</span>
        </div>
    )
}