// Questions on React State
// 1. Create a class component called "MyCounter.js" that depends on another
// class component, "CounterDisplayer.js". "MyCounter.js" keeps track of the
// click count value in the state, and this is where you initialize your state,
// which holds the click counts.
// Create a function named "allClicksCounter()" in "MyCounter.js" that will update or increase your state by one anytime the button in the
// "MyCounter.js" component is clicked.
// Hint:
// ● The primary function of "CounterDisplayer.js" is to show how many
// times the button in the "MyCounter.js" component has been clicked.
// That is, you need to use props to pass the updated click data from
// "MyCounter.js" to "CounterDisplayer.js".
// ● Display the number of clicks exactly below the button.

import React from "react";

const CounterDisplayer = (props) => {
    return (
        <div>
            <h1>
            All clicks counter: {props.clickCount}
            </h1>
        </div>
    );
};

export default CounterDisplayer;