import {useState, useEffect} from 'react';

export default function MouseOver2() {
    const [posX, setPosX] = useState<number>(0);
    const [posY, setPosY] = useState<number>(0);
    const [toggle, setToggle] = useState<boolean>(true);

    useEffect(() => {
        const logMousePosition = (e: MouseEvent): void => {
            setPosX(e.clientX);
            setPosY(e.clientX);
        }
        if (toggle) {
            window.addEventListener('mouseover', logMousePosition);
        } else {
            window.removeEventListener('mouseover', logMousePosition);
        }


        return () => window.removeEventListener('mouseover', logMousePosition);
    }, [toggle])

    const handleToggle = () => setToggle(!toggle);

    return (
        <div>
            <h2>x - {posX}</h2>
            <h2>y - {posY}</h2>
            <button onClick={handleToggle}>Toggle</button>
        </div>
    )


}