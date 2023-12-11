type HorizondalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'


type RoastProps = {
    position: Exclude<`${HorizondalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}

export const Roast = ({ position }: RoastProps) => {
    return (
        <div>Toast notification position - {position}</div>
    )
}
