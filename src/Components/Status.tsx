type statusProps = {
    status: 'loading' | 'success' | 'failure'
}

function Status(props: statusProps) {
    let message
    if (props.status === 'loading') {
        message = 'loading'
    } else if (props.status === 'success') {
        message = 'success'
    } else if (props.status === 'failure') {
        message = "failed"
    }
    return (
        <h1>{message}</h1>
    )
}

export default Status