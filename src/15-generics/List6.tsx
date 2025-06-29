
type List6Props<T> = {
    items: T[]
    clickHandler: (val: T) => void
}

export default function List6<T extends {id: number}>({items, clickHandler}: List6Props<T>) {

    return (
        <ul>
            {items.map((item) => (
                <li key={item.id} onClick={() => clickHandler(item)}>
                    {JSON.stringify(item)}
                </li>
            ))}
        </ul>
    )
}