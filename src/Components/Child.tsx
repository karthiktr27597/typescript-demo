type childProps = {
    children: string
}


function Child(props: childProps) {
    return (
        <div>{props.children}</div>
    )
}

export default Child