
type Person1Props = {
    name: {
        firstName: string
        lastName: string
    }
}

export default function Person1(props: Person1Props) {
    return (
        <div>{props.name.firstName} {props.name.lastName}</div>
    )
}