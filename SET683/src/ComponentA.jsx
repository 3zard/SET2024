import React, {useState} from "react";
import ComponentB from "./ComponentB";

const initialCount = 0;

const ComponentA = () => {
    const [count, setCount] = useState(initialCount);

    function increaseCount() {
        setCount(count + 1);
    }

    return (
        <div id="Component-A">
            <h1>Component A</h1>
            <h1 id="Component-A_counter">{count}</h1>
            <ComponentB increaseCount={increaseCount} />
            <button id="Component-A__button" className="button" onClick={increaseCount}>Count A</button>
        </div>
    );

}

export default ComponentA;