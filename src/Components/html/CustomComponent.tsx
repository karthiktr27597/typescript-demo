import Greet from '../Greet'

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    return (
        <div>CustomComponent
            {props.name}
            {props.isLoggedin}
            {props.number}
        </div>
    )
}
