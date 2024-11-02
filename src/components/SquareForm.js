import React, { useState } from 'react';

function SquareForm() {
    const [input, setInput] = useState("");
    const [squares, setSquares] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const numbers = input.split(',').map(Number);
        setSquares(numbers.map(num => num * num));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Enter numbers separated by commas" 
            />
            <button type="submit">Calculate Squares</button>
            <div>Squares: {squares.join(", ")}</div>
        </form>
    );
}
