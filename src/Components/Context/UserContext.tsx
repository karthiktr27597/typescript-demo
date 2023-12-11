import { createContext, useState } from "react"

export type AuthUser = {
    name: string
    email: string
}

type userContextProviderProps = {
    children: React.ReactNode
}

type userContextProps = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext({} as userContextProps)

export const UserContextProvider = ({ children }: userContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)

    return (
        < UserContext.Provider value={{ user, setUser }} >
            {children}
        </UserContext.Provider >
    )
}


