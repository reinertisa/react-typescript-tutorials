
type Button1Props = {
    handleClick: () => void
}

export default function Button1(props: Button1Props) {
    return (
        <button onClick={props.handleClick}>Click</button>
    )
}