type Count1Props = {
    text: string
    count: number
}

export default function Count1({text, count}: Count1Props) {
    console.log(`Rendering ${text}`)
    return (
        <div>{text} - {count}</div>
    )
}