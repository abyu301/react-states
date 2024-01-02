import React, { Component } from "react";
import CounterDisplayer from "./CounterDisplayer";
// for q#3
import EvenCounterDisplayer from "./EvenCounterDisplayer"

class MyCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clickCount: 0,
        };
    }

    allClicksCounter = () => {
        this.setState((prevState) => ({
            clickCount: prevState.clickCount + 1,
        }));
    };

    render() {
        return (
            <div>
                <button onClick={this.allClicksCounter}>Click here</button>
                <CounterDisplayer clickCount={this.state.clickCount} />
                {/* for q#3 */}
                <EvenCounterDisplayer clickCount={this.state.clickCount} />
            </div>
        );
    }
}

export default MyCounter;
