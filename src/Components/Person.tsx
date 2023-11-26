import { dummi } from "./Reusetype/Person.type"


function Person(props: dummi) {
    return (
        <div>
            <p>Name {props.round.fullname} and work {props.round.work}</p>
        </div>
    )
}

export default Person