import { useState } from "react"


export const LoggedIn = () => {

    const [login, setLogin] = useState(false)

    return (
        <div>
            <button onClick={() => setLogin(true)}>Login</button>
            <button onClick={() => setLogin(false)}>Logout</button>
            User {login ? "LoggedIn" : "LoggedOut"}
        </div>
    )
}


type user = {
    name: string,
    email: string

}



export const Logged = () => {

    const [login, setLogin] = useState<user | null>(null)

    return (
        <div>
            <button onClick={() => setLogin({ name: "username", email: "useremail" })}>Login</button>
            <button onClick={() => setLogin(null)}>Logout</button>
            User {login ? "LoggedIn" : "LoggedOut"}
            <h1>user name {login?.name}</h1>
            <h1>user email {login?.email}</h1>
        </div>
    )
}

// if logout not required

export const Loggedas = () => {

    const [login, setLogin] = useState<user>({} as user)

    return (
        <div>
            <button onClick={() => setLogin({ name: "username", email: "useremail" })}>Login</button>
            User {login ? "LoggedIn" : "LoggedOut"}
            <h1>user name {login?.name}</h1>
            <h1>user email {login?.email}</h1>
        </div>
    )
}