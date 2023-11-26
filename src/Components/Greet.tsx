type GreetProps = {
    name: string,
    number?: number,
    isLoggedin: boolean,
}

function Greet(props: GreetProps) {
    const { number = 100 } = props;

    return (
        <div>
            {
                props.isLoggedin ? <h2>Welcome {props.name} for Typescript number {number}</h2> : "Welcome Guest"
            }
        </div>

    )
}

export default Greet