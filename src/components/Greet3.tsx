
type Greet3Props = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

export default function Greet3(props: Greet3Props) {

    const {messageCount = 0} = props;

    return (
        <div>
            <h2>
                {props.isLoggedIn
                    ? `Welcome ${props.name}! You have ${messageCount} unread messages`
                    : 'Guest'}
            </h2>
        </div>
    )
}