import { Component } from "react";

type CounterProps = {
    message: string
}

type CounterState = {
    count: number
}

export default class Counter extends Component<CounterProps, CounterState> {

    state = {
        count: 0,
    }

    HandleCount = () => {
        this.setState((prevCount) => ({
            count: prevCount.count + 1
        }))
    }


    render() {
        return (
            <div>
                <button onClick={this.HandleCount}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}
