import { list } from "./Reusetype/Person.type"

type names = {
    list: list[]
}

function Array(props: names) {
    return (
        <div>
            {
                props.list.map((name) => (
                    <div key={name.first}>
                        <h1>{name.first} {name.last}</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default Array