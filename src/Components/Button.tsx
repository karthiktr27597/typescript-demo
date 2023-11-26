type buttonProps = {
    handleClick: () => void
}

type eventProps = {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

type changeProps = {
    input: string
}

export function Button(props: buttonProps) {
    return (
        <button onClick={props.handleClick}>Click</button>
    )
}

export function EventButton(props: eventProps) {
    return (
        <button onClick={(e) => props.handleClick(e, 1)}>Event Button</button>
    )
}


export function ChangeButton(props: changeProps) {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e)
    }

    return (
        <input type="text" value={props.input} onChange={handleInputChange} />
    )
}

