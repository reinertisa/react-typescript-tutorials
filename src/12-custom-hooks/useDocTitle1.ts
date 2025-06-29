import {useState, useEffect} from 'react';

export default function useDocTitle1(initialCount: number = 0 ) {
    const [count, setCount] = useState<number>(initialCount);

    useEffect(() => {
        document.title = `Clicked ${count} times`;
    }, [count]);

    const handleIncrement = (): void => setCount(count + 1);

    return {count, handleIncrement}


}