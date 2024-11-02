import React, { useState } from 'react';

function UserForm() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({ name: "", lastName: "", age: "" });

    const addUser = () => {
        setUsers([...users, user]);
        setUser({ name: "", lastName: "", age: "" });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <div>
            <input name="name" value={user.name} onChange={handleChange} placeholder="Name" />
            <input name="lastName" value={user.lastName} onChange={handleChange} placeholder="Last Name" />
            <input name="age" value={user.age} onChange={handleChange} placeholder="Age" />
            <button onClick={addUser}>Add User</button>

            <ul>
                {users.map((u, index) => (
                    <li key={index}>
                        {u.name} {u.lastName}, Age: {u.age}
                    </li>
                ))}
            </ul>
        </div>
    );
}
