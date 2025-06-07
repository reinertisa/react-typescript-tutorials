type Name = {
    firstName: string
    lastName: string
}

type Person3Props = {
    name: Name
}

export default function Person3({name}: Person3Props) {
    return (
        <div>{name.firstName} - {name.lastName}</div>
    )
}
