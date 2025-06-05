
export type ProfileProps = {
    name: string
}
export default function Profile1({name}: ProfileProps) {
    return (
        <div>Private Profile component - {name}</div>
    )
}