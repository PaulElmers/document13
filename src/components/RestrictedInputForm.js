import React, { useRef } from 'react';

function RestrictedInputForm() {
    const inputRef = useRef();

    const handleReset = () => {
        if (inputRef.current.value.toLowerCase() === "test") inputRef.current.value = "";
    };

    return (
        <div>
            <input ref={inputRef} placeholder="Type something" />
            <button onClick={handleReset}>Check and Reset</button>
        </div>
    );
}
