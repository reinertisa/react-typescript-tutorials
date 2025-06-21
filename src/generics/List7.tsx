type List7Props<T> = {
    items: T[],
    onClick: (val: T) => void
}

export default function List7<T extends {id: number, name: string}>({items, onClick}: List7Props<T>) {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id} onClick={() => onClick(item)}>{item.name}</li>
            ))}
        </ul>
    )
}