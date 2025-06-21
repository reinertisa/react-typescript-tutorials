
export type ProfileProps = {
    name: string
}
export default function Profile({name}: ProfileProps) {
    return (
        <div>
            Name is - {name}
        </div>
    )
}