
type List5Props = {
    items: string[] | number[]
    handleClick: (item: string | number) => void
}


export default function List5({items, handleClick}: List5Props) {

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index} onClick={() => handleClick(item)}>{item}</li>
            ))}
        </ul>
    )
}