import {useState, useEffect} from 'react';

export default function DocTitle1() {
    const [count, setCount] = useState<number>(0);

    const handleIncrement = (): void => setCount(count + 1);

    useEffect(() => {
        document.title = `Clicked ${count} times`;
    }, [count])

    return (
        <div>
            <button onClick={handleIncrement}>Count - {count}</button>
        </div>
    )
}