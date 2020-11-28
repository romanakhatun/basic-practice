import React, { useState, useLayoutEffect } from 'react';

function UseLayoutEffect() {

    const [value, setValue] = useState(0);
    useLayoutEffect(() => {
        if (value === 0) {
            setValue(10 + Math.random() * 20);
        }
    }, [value]);

    return (
        <div>
            <p>{value}</p>
            <button onClick={() => setValue(0)}>Random Value</button>

        </div>
    );
}

export default UseLayoutEffect;