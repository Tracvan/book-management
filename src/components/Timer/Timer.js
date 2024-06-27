// eslint-disable-next-line no-undef
import {Component} from "react";

export class Timer extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }
    }

    componentDidMount() {
        console.log("Viet Nam")
        console.log("Hi")
        console.log("Xin chao")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Hi")
    }


    changeTime() {
        this.setState({
            time: this.state.time + 1
        })
    }

    // eslint-disable-next-line react/require-render-return
    render() {
        return (
            <div>
                <h2>{this.state.time}</h2>
                <button onClick={() => this.changeTime()}>+</button>
            </div>
        )
    }
}

