import React, { useState } from 'react';

function UserProfileForm() {
    const [profiles, setProfiles] = useState([]);
    const [profile, setProfile] = useState({ name: "", age: "", city: "" });

    const addProfile = () => {
        setProfiles([...profiles, { ...profile, id: Date.now() }]);
        setProfile({ name: "", age: "", city: "" });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleEdit = (id, key, value) => {
        setProfiles(profiles.map(profile => 
            profile.id === id ? { ...profile, [key]: value } : profile
        ));
    };

    return (
        <div>
            <input name="name" value={profile.name} onChange={handleChange} placeholder="Name" />
            <input name="age" value={profile.age} onChange={handleChange} placeholder="Age" />
            <input name="city" value={profile.city} onChange={handleChange} placeholder="City" />
            <button onClick={addProfile}>Add Profile</button>

            <ul>
                {profiles.map(({ id, name, age, city }) => (
                    <li key={id}>
                        Name: <input value={name} onChange={(e) => handleEdit(id, "name", e.target.value)} />
                        Age: <input value={age} onChange={(e) => handleEdit(id, "age", e.target.value)} />
                        City: <input value={city} onChange={(e) => handleEdit(id, "city", e.target.value)} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
