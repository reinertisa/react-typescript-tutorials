
type Greet2Props = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

export default function Greet2(props: Greet2Props) {

    return (
        <div>
            <div>Welcome {props.name}</div>
            <div> You have {props. messageCount} unread messages</div>
            <div>{props.isLoggedIn ? `Welcome ${props.name}` : 'Guest'}</div>
        </div>
    )

}