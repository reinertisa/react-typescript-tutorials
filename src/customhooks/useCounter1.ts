import {useState} from 'react'

export default function useCounter1(initialValue: number = 0, value: number = 1) {
    const [count, setCount] = useState<number>(initialValue);

    const handleIncrement = (): void => setCount(count + value);
    const handleDecrement = (): void => setCount(count - value);
    const handleReset = (): void => setCount(initialValue);

    return {count, handleIncrement, handleDecrement, handleReset};
}