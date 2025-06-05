
type List4Props<T> = {
    items: T[]
    onClick: (value: T) => void
}

export default function List4<T extends {id: number}>({items, onClick}: List4Props<T>) {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item) => (
                <li key={item.id} onClick={() => onClick(item)}>{JSON.stringify(item)}</li>
            ))}
        </div>
    )
}