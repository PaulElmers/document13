import React, { useState } from 'react';

function Validated() {
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!email.includes("@")) newErrors.email = "Invalid email.";
        if (!Number(age) || age < 1 || age > 100) newErrors.age = "Invalid age.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) alert("Form is valid!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                    type="text" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <input 
                    type="number" 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)} 
                    placeholder="Age" 
                />
                {errors.age && <p>{errors.age}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Validated;
