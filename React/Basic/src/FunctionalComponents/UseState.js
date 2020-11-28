import React from 'react';
import { useState } from 'react';

function UseState() {
    const [count, setCount] = useState(0)
    const increaseHnler = () => {
        setCount(count + 1)
    }

    const DecreaseHnler = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    return (
        <div>
            <h3>Count:{count}</h3>
            <button onClick={increaseHnler}>Increase</button>
            <button onClick={DecreaseHnler}>Decrease</button>

        </div>
    );
}

export default UseState;