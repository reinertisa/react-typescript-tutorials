
type Person2Props = {
    name: Name
}

type Name = {
    firstName: string
    lastName: string
}


export default function Person2({name}: Person2Props) {
    return (
        <div>{name.firstName} - {name.lastName}</div>
    )
}