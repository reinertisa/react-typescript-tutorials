
type Greet5Props = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

export default function Greet5({name = 'Fezzik', messageCount = 0, isLoggedIn = false}: Greet5Props) {

    return (
        <div>
            <h2>
                {isLoggedIn
                    ? `Welcome ${name}! You have ${messageCount} unread messages`
                    : 'Welcome Guest'}
            </h2>
        </div>
    )
}