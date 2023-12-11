
type HTMLButtonProps = {
    varient: "primary" | "secondary",
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export const HTMLButton = ({ varient, children, ...rest }: HTMLButtonProps) => {
    return (
        <button className={`class-with-${varient}`} {...rest}>{children}</ button >
    )
}
