import React from 'react';
import { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state
    }
}
const ReducerCount = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <>
                Count: {state.count}
                <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
                <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            </>
        </div>
    );
};

export default ReducerCount;