
type Greet4Props = {
    name: string
}

export default function Greet4({name = 'Micheal'}: Greet4Props) {
    return (
        <div>
            Welcome - {name}
        </div>
    )
}