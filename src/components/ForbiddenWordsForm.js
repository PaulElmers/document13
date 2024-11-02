import React, { useState } from 'react';

function ForbiddenWordsForm() {
    const [formData, setFormData] = useState({ name: "", comment: "" });
    const forbiddenWords = ["badword"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (!forbiddenWords.some(word => value.includes(word))) {
            setFormData({ ...formData, [name]: value });
        }
    };

    return (
        <div>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <textarea name="comment" value={formData.comment} onChange={handleChange} placeholder="Comment" />
            <p>Name: {formData.name}</p>
            <p>Comment: {formData.comment}</p>
        </div>
    );
}
