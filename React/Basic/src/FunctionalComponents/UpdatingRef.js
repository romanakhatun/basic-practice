import React, { useState, useRef } from "react";
// const FocusInput = () => {
//     const inputEl = React.useRef()

//     const focusInput = () => {
//         inputEl.current.focus()
//     }

//     return (
//         <>
//             <input ref={inputEl} type="text" />
//             <button onClick={focusInput}>Focus input</button>
//         </>
//     )
// }

const Counter = () => {
    const [count, setCount] = useState(0)
    const counterEl = useRef(null)

    const increment = () => {
        setCount(count + 1)
        console.log(counterEl)
    }

    return (
        <div>
            <h2>Count: <span ref={counterEl}>{count}</span></h2>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default Counter;