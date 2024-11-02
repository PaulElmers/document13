import React, { useState } from 'react';

function ObjectInputForm() {
    const [user, setUser] = useState({ name: "", age: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    return (
        <form>
            <input 
                type="text" 
                name="name" 
                value={user.name} 
                onChange={handleChange} 
                placeholder="Name" 
            />
            <input 
                type="number" 
                name="age" 
                value={user.age} 
                onChange={handleChange} 
                placeholder="Age" 
            />
            <div>Name: {user.name}, Age: {user.age}</div>
        </form>
    );
}
