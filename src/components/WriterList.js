import React, { useState } from 'react';

function WriterList() {
    const [writers, setWriters] = useState([]);
    const [newWriter, setNewWriter] = useState("");

    const addWriter = () => {
        setWriters([...writers, newWriter]);
        setNewWriter("");
    };

    return (
        <div>
            <ul>
                {writers.map((writer, index) => (
                    <li key={index}>{writer}</li>
                ))}
            </ul>
            <input 
                type="text" 
                value={newWriter} 
                onChange={(e) => setNewWriter(e.target.value)} 
                placeholder="New writer's name" 
            />
            <button onClick={addWriter}>Add Writer</button>
        </div>
    );
}
