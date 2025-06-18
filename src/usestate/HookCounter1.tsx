import {useState} from 'react';

export default function HookCounter1() {
    const [count, setCount] = useState<number>(0);

    const clickHandler = (): void => setCount(count + 1);

    return (
        <button onClick={clickHandler}>Count - {count}</button>
    );
}