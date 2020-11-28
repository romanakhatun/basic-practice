import React, { useEffect, useState, useDebugValue } from "react";


const useDelayedMessage = (msg, delay) => {
    const [message, setMessage] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setMessage(msg);
        }, delay);
    }, []);

    useDebugValue(message, message =>
        message ? "Message settled " : "Message not settled "
    );
    return message;
};
function UseDebugValue() {
    const delayedMessage = useDelayedMessage("It is delayed Massage", 5000);
    return <div>{delayedMessage}</div>;
}
export default UseDebugValue;