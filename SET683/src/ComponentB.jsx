import React from "react";

const ComponentB = (props) => {
    const {increaseCount} = props;
    return (
        <div id="Component-B">
            <h1>Component B</h1>
            <button id="Component-B_button" className="button" onClick={increaseCount}>Count B</button>
        </div>
    );
}

export default ComponentB;