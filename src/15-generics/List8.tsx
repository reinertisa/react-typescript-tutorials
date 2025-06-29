

type List8Props<T> = {
    items: T[],
    onClick: (value: T) => void
}

export default function List8<T extends {id: number, title: string}>({items, onClick}: List8Props<T>) {

    return (
        <ul>
            {items.map(item => (
                <li key={item.id} onClick={() => onClick(item)}>
                    {item.title}
                </li>
            ))}
        </ul>
    )
}