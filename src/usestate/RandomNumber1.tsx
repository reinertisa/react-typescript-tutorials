import {useState} from 'react';

type Items = {
    id: number
    value: number
}[]


export default function RandomNumber1() {
    const [items, setItems] = useState([] as Items);

    const generateNumber = (): void => setItems([...items, {
        id: items.length,
        value: Math.floor(Math.random() * 100)
    }]);

    return (
        <div>
            <button onClick={generateNumber}>Add a number</button>
            <ul>
                {items.map((item) => (<li key={item.id}>{item.value}</li>))}
            </ul>
        </div>
    )
}