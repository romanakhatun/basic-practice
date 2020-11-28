import React from 'react';

function Dataget() {
    const [users, setUsers] = React.useState([]);
    // cannot make useEffect callback function async
    React.useEffect(() => {
        getUser();
    }, []);

    // instead, use async / await in separate function, then call
    // function back in useEffect
    async function getUser() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
    }
    return (
        <div>
            {
                users.map(use => <li>{use.name}</li>)
            }
        </div>
    );
}


export default Dataget;