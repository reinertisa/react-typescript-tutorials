
type List3Props<T> = {
    items: T[],
    onClick: (value: T) => void
}

export default function List3<T>({items, onClick}: List3Props<T>) {

    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => (
                <li key={index} onClick={() => onClick(item)}>{JSON.stringify(item)}</li>
            ))}
        </div>
    )
}