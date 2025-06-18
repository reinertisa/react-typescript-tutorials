import {useState, useEffect} from 'react';

export default function MouseOver1() {
    const [posX, setPosX] = useState<number>(0);
    const [posY, setPosY] = useState<number>(0);

    useEffect(() => {
        const logMousePosition = (e: MouseEvent) => {
            setPosX(e.clientX);
            setPosY(e.clientY);
        }

        window.addEventListener('mouseover', logMousePosition);

        return () => window.removeEventListener('mouseover', logMousePosition);

    }, [])


    return (
        <div>
            <h2>X - {posX}</h2>
            <h2>Y - {posY}</h2>
        </div>
    )
}