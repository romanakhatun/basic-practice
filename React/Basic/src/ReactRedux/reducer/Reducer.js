import React, { useReducer } from 'react';

const initialState = { username: "", isAuth: false };

function reducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return { username: action.payload.username, isAuth: true };
        case "SIGNOUT":
            return { username: "", isAuth: false };
        default:
            return state;
    }
}

function Reducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    function handleLogin() {
        dispatch({ type: "LOGIN", payload: { username: "Romana" } });
    }

    function handleSignout() {
        dispatch({ type: "SIGNOUT" });
    }

    return (
        <div>
            <h2>Current user: {state.username}, isAuthenticated {state.isAuth}</h2>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignout}>Signout</button>
        </div>
    );
}

export default Reducer;