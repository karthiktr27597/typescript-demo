type styleProps = {
    style: React.CSSProperties
}

function Stylecom(props: styleProps) {
    return (
        <div style={props.style}></div>
    )
}

export default Stylecom