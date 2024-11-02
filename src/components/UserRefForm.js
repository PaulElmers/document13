import React, { useRef, useState } from 'react';

function UserRefForm() {
    const nameRef = useRef();
    const lastNameRef = useRef();
    const [userInfo, setUserInfo] = useState("");

    const handleSubmit = () => {
        setUserInfo(`Name: ${nameRef.current.value}, Last Name: ${lastNameRef.current.value}`);
    };

    return (
        <div>
            <input ref={nameRef} placeholder="Name" />
            <input ref={lastNameRef} placeholder="Last Name" />
            <button onClick={handleSubmit}>Submit</button>
            <p>{userInfo}</p>
        </div>
    );
}
