import Person3 from "./Person3.tsx";

type Name = {
    id: number
    firstName: string
    lastName: string
}

type PersonList3Props = {
    names: Name[]
}

export default function PersonList3({names}: PersonList3Props) {

    return (
        <div>
            {names.map(name => (
                <Person3 name={name} key={name.id} />
            ))}
        </div>
    )
}