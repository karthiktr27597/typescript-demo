import { useReducer } from "react"


type countState = {
    count: number
}

type updatedState = {
    type: 'reset'
}

type actionState = {
    type: 'increment' | 'decrement'
    payload: number
}


const initialState = { count: 0 }

function reducer(state: countState, action: actionState | updatedState) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState
        default:
            return state
    }
}


function Reducefun() {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            Count : {state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>Increment, {state.count}</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>Decrement, {state.count}</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset, {state.count}</button>
        </div>
    )
}

export default Reducefun