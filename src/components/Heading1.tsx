type Heading1Props = {
    children: string
}

export default function Heading1(props: Heading1Props) {
    return (
        <h1>{props.children}</h1>
    )
}