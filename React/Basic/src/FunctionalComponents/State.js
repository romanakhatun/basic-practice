import React, { useState, useRef, useEffect } from 'react';

function State() {
    return (
        <div>
            <Counter />
        </div>
    );
}
// change count 
function Counter() {
    const [ count, setCount ] = useState(0)
    const increaseHnler = () => {
        setCount(count + 1)
    }

    const DecreaseHnler = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    // State value 
    const prevCount = usePrevious(count);

    //previous count
    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        }, [ value ]);
        return ref.current;
    }
    return (
        <div>
            <h3>Count:{count}</h3>
            <button onClick={increaseHnler}>Increase</button>
            <button onClick={DecreaseHnler}>Decrease</button>

            {/* second */}
            <h2>Count:{count} privious:{prevCount}</h2>
            <button onClick={() => { setCount(count + 1) }}>+</button>
            <button onClick={() => { setCount(count - 1) }}>-</button>
        </div>
    );
}
export default State;