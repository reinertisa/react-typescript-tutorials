
type Name = {
    id: number
    firstName: string
    lastName: string
}

type PersonList2Props = {
    names: Name[]
}

export default function PersonList2({names}: PersonList2Props) {
    return (
        <div>
            {names.map(name => (
                <li key={name.id}>{name.firstName} - {name.lastName}</li>
            ))}
        </div>
    )
}