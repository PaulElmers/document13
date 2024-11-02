import React, { useState } from 'react';

function ValidatedForm() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (/\d/.test(name)) newErrors.name = "Name should not contain numbers.";
        if (!/^\d+$/.test(age)) newErrors.age = "Age should contain only numbers.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) alert("Form submitted successfully!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
                <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
                {errors.age && <span>{errors.age}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
