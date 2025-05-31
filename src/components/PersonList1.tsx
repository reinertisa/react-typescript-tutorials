

type PersonList1Props = {
    names: {
        firstName: string
        lastName: string,
        id: number
    }[]
}

export default function PersonList1(props: PersonList1Props) {
    return (
        <div>
            {props.names.map(name => (
                <div key={name.id}>{name.firstName} {name.lastName}</div>
            ))}
        </div>
    )
}