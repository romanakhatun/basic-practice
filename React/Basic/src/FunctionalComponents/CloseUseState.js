import React, { useState } from 'react';

const DelayeCount = () => {
    const [count, setCount] = useState(0);

    function clickTime() {
        setTimeout(function delay() {
            setCount(count + 1);
        }, 1000);
    }

    function clickCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={clickTime}>Time Count</button>
            <button onClick={clickCount}>Increase</button>
        </div>
    );
}

export default DelayeCount;
