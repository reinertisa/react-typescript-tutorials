
type Status1Props = {
    status: string
}

export default function Status1(props: Status1Props) {
    let message: string = '';
    if (props.status === 'loading') {
        message = 'Loading...'
    } else if (props.status === 'success') {
        message = 'Data fetched successfully'
    } else if (props.status === 'error') {
        message = 'Error fetching data'
    }
    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}