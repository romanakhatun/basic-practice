import React, { useState, useCallback } from "react";

function formatCounter(counterVal) {
    return `The counter value is ${counterVal}`;
}
function UseCallBack() {
    const [value, setValue] = useState(0);

    const onClick = useCallback(() => {
        setValue(preValue => ++preValue)
    }, []);
    return (
        <div>
            <div>{formatCounter(value)}</div>
            <button onClick={onClick}>Increment</button>
        </div>
    );
}
export default UseCallBack;