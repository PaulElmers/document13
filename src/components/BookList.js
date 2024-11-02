import React, { useState } from 'react';

function BookList() {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState("");

    const addBook = () => {
        setBooks([...books, newBook]);
        setNewBook("");
    };

    return (
        <div>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>{book}</li>
                ))}
            </ul>
            <input 
                type="text" 
                value={newBook} 
                onChange={(e) => setNewBook(e.target.value)} 
                placeholder="New book title" 
            />
            <button onClick={addBook}>Add Book</button>
        </div>
    );
}
