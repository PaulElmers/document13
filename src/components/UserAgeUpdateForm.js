import React, { useState } from 'react';

function UserAgeUpdateForm() {
    const [users, setUsers] = useState([
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
    ]);

    const updateAge = (id, newAge) => {
        setUsers(users.map(user => 
            user.id === id ? { ...user, age: newAge } : user
        ));
    };

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <span>{user.name} - Age: </span>
                    <input 
                        type="number" 
                        value={user.age} 
                        onChange={(e) => updateAge(user.id, e.target.value)} 
                    />
                </div>
            ))}
        </div>
    );
}
