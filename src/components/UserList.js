import React, { useState } from 'react';

function UserList() {
    const [users, setUsers] = useState([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]);

    const removeUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                        <button onClick={() => removeUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
