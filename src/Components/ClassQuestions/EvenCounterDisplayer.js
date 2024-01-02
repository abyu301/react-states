// q#2. Create another class component called "EvenCounterDisplayer.js", on which the “MyCounter.js” component depends. This component keeps track of and displays ONLY the number of even click counts when the button inside “MyCounter.js” is clicked.
// Hint:
// ● When the button is clicked for the first time, your "EvenCounterDisplayer.js" component should display "Clicked 0
// times". However, when the button is clicked for the second time, "Clicked 2 times" should appear. When the button is clicked for the third time, it should show "Clicked 2 times". When clicked the fourth time, it should show "Clicked 4 times" and so forth.
// ● Display the “EvenCounterDisplayer.js” component directly below the "CounterDisplayer.js" component so that you can see both counters together.


import React from "react";

const EvenCounterDisplayer = (props) => {
    const evenClicks = Math.floor(props.clickCount / 2) * 2;

    return (
        <div>
            <h1>Even clicks Counter: {evenClicks}</h1>
        </div>
    );
};
export default EvenCounterDisplayer;