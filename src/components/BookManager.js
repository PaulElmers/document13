import React, { useState } from 'react';

function BookManager() {
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState("");

    const addBook = () => {
        setBooks([...books, { id: Date.now(), title: book }]);
        setBook("");
    };

    const removeBook = (id) => {
        setBooks(books.filter(b => b.id !== id));
    };

    return (
        <div>
            <input value={book} onChange={(e) => setBook(e.target.value)} placeholder="Book title" />
            <button onClick={addBook}>Add Book</button>
            <ul>
                {books.map(b => (
                    <li key={b.id}>
                        {b.title}
                        <button onClick={() => removeBook(b.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
