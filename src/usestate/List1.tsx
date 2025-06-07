import {useState} from 'react';

type List = number[]

export default function List1() {
    const [data, setData] = useState([] as List);

    const addNumber = (): void => setData([...data, Math.floor(Math.random() * 100)]);

    return (
        <div>
            <button onClick={addNumber}>Add a number</button>
            <ul>
                {data?.map((num, index) => (
                    <li key={`${num}--${index}`}>{num}</li>
                ))}
            </ul>
        </div>
    )

}