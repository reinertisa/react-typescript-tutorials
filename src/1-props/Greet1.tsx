
type Greet1Props = {
    name: string
}

export default function Greet1(props: Greet1Props) {
    return (
        <div>Welcome {props.name}</div>
    )
}