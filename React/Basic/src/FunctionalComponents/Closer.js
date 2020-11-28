import React, { useEffect, useState } from 'react';

function WatchCount() {
    const [count, setCount] = useState(0);

    useEffect(function () {
        const id = setInterval(function log() {
            console.log(`Count is: ${count}`);
        }, 2000);
        return function () {
            clearInterval(id);
        }
    }, [count]);

    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>
                Increase
        </button>
        </div>
    );
}

export default WatchCount;