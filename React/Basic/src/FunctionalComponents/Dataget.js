import React, { useState, useEffect } from 'react';

function Dataget() {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, [])

    return (
        <div>
            <h3>Post people:{users.length}</h3>
            <ul>
                {
                    users.map(user => <li>{user.name}</li>)
                }
            </ul>
        </div>
    );
}

export default Dataget;