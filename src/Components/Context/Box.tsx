import { useContext } from "react"
import { themeContext } from "./ThemeContext"


export const Box = () => {

    const theme = useContext(themeContext)

    return (
        <div style={{ background: theme.primary.main, color: theme.primary.text }}>Theme Context</div>
    )
}
