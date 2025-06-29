
type List1Props = {
    items: string[] | number[]
    onClick: (value: string | number) => void
}

export default function List1({items, onClick}: List1Props) {

    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}